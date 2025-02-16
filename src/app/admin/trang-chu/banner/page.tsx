'use client';

import UpdateLinkModal from '../../_components/add-link.modal';
import { Breadcrumb } from '@/components/breadcrumb';
import CustomButton from '@/components/button/custom.button';
import DeleteButton from '@/components/button/delete.button';
import EditButton from '@/components/button/edit.button';
import SaveButton from '@/components/button/save.button';
import UploadCard from '@/components/card/upload.card';
import ConfirmDialog from '@/components/dialog/confirm.dialog';
import ApiRoute from '@/constants/api-route';
import { ComponentEnum } from '@/enums/component.enum';
import { PageEnum } from '@/enums/page.enum';
import useCaller from '@/hooks/useCaller';
import useModal from '@/hooks/useModal';
import LayoutService from '@/services/layout.service';
import { uploadImage } from '@/services/storage.service';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link2 } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';

const queryKey: string = '/trang-chu/banner';
const modalKey = 'link';

interface UpdateBanner extends Banner {
    file?: File;
}

function Banner() {
    const queryClient = useQueryClient();
    const [visible, setVisible] = useState<boolean>(false);
    const { callApi, loading } = useCaller<any>();
    const [banners, setBanners] = useState<UpdateBanner[]>([]);
    const { modals, openModal, closeModal } = useModal([modalKey]);
    const { data = [], isLoading } = useQuery<Banner[]>({
        queryKey: [queryKey],
        queryFn: () => LayoutService.trangChu.getBanner(),
        staleTime: 10 * 1000,
    });

    const onFetch = () => {
        queryClient.invalidateQueries({
            queryKey,
            exact: true,
        });
    };

    useEffect(() => {
        if (!isLoading) {
            setBanners(data);
        }
    }, [data]);

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
                    onClick={() => openModal(modalKey, item.link)}
                >
                    <Link2 />
                </CustomButton>
                <EditButton>Chỉnh sửa</EditButton>
                <DeleteButton onClick={() => onDelete(item.id)}>Xóa</DeleteButton>
            </Fragment>
        );
    };

    const onUploadImage = (id: string, file: File) => {
        setBanners((prevBanners) => prevBanners.map((banner) => (banner.id === id ? { ...banner, file } : banner)));
    };

    const onSave = async () => {
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
            onFetch();
        }
    };

    const onDelete = (id: string) => {
        setBanners((prevBanners) =>
            prevBanners.map((banner) => (banner.id === id ? { ...banner, image: '', link: '' } : banner)),
        );
        onFetch();
    };

    const onEditLink = () => {};

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumbs} />
                <SaveButton onClick={() => setVisible(true)}>Lưu</SaveButton>
            </div>

            <div className="flex flex-wrap gap-10">
                {banners.map((item, index) => {
                    return (
                        <UploadCard
                            flag={item.image !== '' || item.file !== undefined}
                            src={item.image}
                            key={index}
                            onUpload={(file: File) => onUploadImage(item.id, file)}
                        >
                            {ButtonComponent(item)}
                        </UploadCard>
                    );
                })}
                {/* <UploadCard flag src={'/images/banner.png'}>
                    {ButtonComponent()}
                </UploadCard>
                <UploadCard>{ButtonComponent()}</UploadCard>
                <UploadCard>{ButtonComponent()}</UploadCard>
                <UploadCard>{ButtonComponent()}</UploadCard> */}
            </div>

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
