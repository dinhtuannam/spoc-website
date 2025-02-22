'use client';

import UpdateLinkModal from '../../_components/add-link.modal';
import { Breadcrumb } from '@/components/breadcrumb';
import CustomButton from '@/components/button/custom.button';
import SaveButton from '@/components/button/save.button';
import UploadCard from '@/components/card/upload.card';
import ConfirmDialog from '@/components/dialog/confirm.dialog';
import PageLoading from '@/components/loading/page.loading';
import ApiRoute from '@/constants/api-route';
import { ComponentEnum } from '@/enums/component.enum';
import { PageEnum } from '@/enums/page.enum';
import useCaller from '@/hooks/useCaller';
import useModal from '@/hooks/useModal';
import LayoutService from '@/services/layout.service';
import { uploadImage } from '@/services/storage.service';
import { Link2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const modalKey = 'link';

function Banner() {
    const [visible, setVisible] = useState<boolean>(false);
    const { callApi, loading, setLoading } = useCaller<any>();
    const [banners, setBanners] = useState<UpdateBanner[]>([]);
    const { modals, openModal, closeModal } = useModal([modalKey]);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            const res = await LayoutService.trangChu.getBanner();
            if (res) {
                setBanners(res);
            }
            setLoading(false);
        };
        fetchApi();
    }, []);

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/admin/trang-chu/banner',
        },
        {
            title: 'Banner',
            link: '',
        },
    ];

    const onUploadImage = (id: string, file: File) => {
        setBanners((prevBanners) => prevBanners.map((banner) => (banner.id === id ? { ...banner, file } : banner)));
    };

    const onSave = async () => {
        setLoading(true);
        const payload = banners;
        await Promise.all(
            payload.map(async (item) => {
                if (item.file) {
                    item.image = (await uploadImage(item.file)) ?? '';
                    item.file = undefined;
                }
            }),
        );
        const result = await callApi(
            ApiRoute.Layout.update(PageEnum.TrangChu, ComponentEnum.Banner),
            {
                method: 'PUT',
                body: JSON.stringify(payload),
            },
            'Lưu banner trang chủ thành công',
        );
        if (result.succeeded) {
            setBanners(result.data);
        }
        setLoading(false);
    };

    const onDelete = (id: string) => {
        setBanners((prevBanners) =>
            prevBanners.map((banner) =>
                banner.id === id ? { ...banner, image: '', link: '', file: undefined } : banner,
            ),
        );
    };

    const onEditLink = (id: string, link: string) => {
        setBanners((prevBanners) =>
            prevBanners.map((banner) => (banner.id === id ? { ...banner, link: link } : banner)),
        );
    };

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumbs} />
                <div className="flex items-center gap-2">
                    <SaveButton disabled={loading} onClick={() => setVisible(true)}>
                        Lưu
                    </SaveButton>
                </div>
            </div>

            {loading ? (
                <PageLoading />
            ) : (
                <div className="flex flex-wrap gap-10">
                    {banners.map((item, index) => {
                        return (
                            <UploadCard
                                flag={item.image !== '' || item.file !== undefined}
                                src={item.image}
                                key={index}
                                onUpload={(file: File) => onUploadImage(item.id, file)}
                                onRemoveImage={() => onDelete(item.id)}
                                onChangeImage={(file: File) => onUploadImage(item.id, file)}
                            >
                                <CustomButton
                                    className="btn-primary"
                                    hoverContent="Đường dẫn banner"
                                    onClick={() =>
                                        openModal(modalKey, {
                                            id: item.id,
                                            link: item.link,
                                        })
                                    }
                                >
                                    <Link2 />
                                </CustomButton>
                            </UploadCard>
                        );
                    })}
                </div>
            )}

            <ConfirmDialog visible={visible} closeModal={() => setVisible(false)} onSubmit={() => onSave()} />
            <UpdateLinkModal
                visible={modals[modalKey].visible}
                onSubmit={onEditLink}
                closeModal={() => closeModal(modalKey)}
                data={modals[modalKey].data}
            />
        </div>
    );
}

export default Banner;
