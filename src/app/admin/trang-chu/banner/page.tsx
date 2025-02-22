'use client';

import UpdateLinkModal from '../../_components/add-link.modal';
import { Breadcrumb } from '@/components/breadcrumb';
import CustomButton from '@/components/button/custom.button';
import DeleteButton from '@/components/button/delete.button';
import SaveButton from '@/components/button/save.button';
import UploadButton from '@/components/button/upload.button';
import UploadCard from '@/components/card/upload.card';
import ConfirmDialog from '@/components/dialog/confirm.dialog';
import PageLoading from '@/components/loading/page.loading';
import ApiRoute from '@/constants/api-route';
import { ComponentEnum } from '@/enums/component.enum';
import { PageEnum } from '@/enums/page.enum';
import { useToast } from '@/hooks/use-toast';
import useCaller from '@/hooks/useCaller';
import useModal from '@/hooks/useModal';
import LayoutService from '@/services/layout.service';
import { uploadImage } from '@/services/storage.service';
import { Link2 } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';

const modalKey = 'link';

function Banner() {
    const [visible, setVisible] = useState<boolean>(false);
    const { callApi, loading, setLoading } = useCaller<any>();
    const [banners, setBanners] = useState<UpdateBanner[]>([]);
    const [original, setOriginal] = useState<UpdateBanner[]>([]);
    const { modals, openModal, closeModal } = useModal([modalKey]);
    const { toast } = useToast();

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            const res = await LayoutService.trangChu.getBanner();
            if (res) {
                setBanners(res);
                setOriginal(res);
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

    const ButtonComponent = (item: Banner) => {
        return (
            <Fragment>
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
                <UploadButton onFileSelect={(file: File) => onChangeImage(item.id, file)} accept="image/*" icon={false}>
                    Chỉnh sửa
                </UploadButton>
                <DeleteButton onClick={() => onDelete(item.id)}>Xóa</DeleteButton>
            </Fragment>
        );
    };

    const onUploadImage = (id: string, file: File) => {
        setBanners((prevBanners) => prevBanners.map((banner) => (banner.id === id ? { ...banner, file } : banner)));
    };

    const onChangeImage = (id: string, file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setBanners((prevBanners) =>
            prevBanners.map((banner) => (banner.id === id ? { ...banner, image: imageUrl, file } : banner)),
        );
    };

    const onRemoveSelectImage = (id: string) => {
        const find = original.find((x) => x.id === id);
        if (!find) {
            toast({
                variant: 'destructive',
                title: 'Thông báo thao tác',
                description: 'Lỗi hệ thống, không tìm thấy bản ghi cần xóa',
                duration: 2500,
            });
        }
        setBanners((prevBanners) =>
            prevBanners.map((banner) =>
                banner.id === id ? { ...banner, image: find?.image ?? '', file: undefined } : banner,
            ),
        );
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
            setOriginal(result.data);
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
                        console.log(item);

                        return (
                            <UploadCard
                                flag={item.image !== '' || item.file !== undefined}
                                src={item.image}
                                key={index}
                                onUpload={(file: File) => onUploadImage(item.id, file)}
                                onRemoveImage={() => onRemoveSelectImage(item.id)}
                            >
                                {ButtonComponent(item)}
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
