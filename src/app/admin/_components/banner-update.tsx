'use client';

import UpdateLinkModal from './add-link.modal';
import { Breadcrumb } from '@/components/breadcrumb';
import CustomButton from '@/components/button/custom.button';
import SaveButton from '@/components/button/save.button';
import UploadCard from '@/components/card/upload.card';
import ConfirmDialog from '@/components/dialog/confirm.dialog';
import PageLoading from '@/components/loading/page.loading';
import ApiRoute from '@/constants/api-route';
import { ComponentEnum } from '@/enums/component.enum';
import { PageEnum } from '@/enums/page.enum';
import GeneratorHelper from '@/helpers/generator.helper';
import useCaller from '@/hooks/useCaller';
import useModal from '@/hooks/useModal';
import LayoutService from '@/services/layout.service';
import { uploadImage } from '@/services/storage.service';
import { Link2 } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';

const modalKey = 'link';

const initialValue: UpdateBanner = {
    id: GeneratorHelper.newGuid(),
    sort: 0,
    image: '',
    link: '',
    file: undefined,
};

interface BannerUpdateProps {
    page: PageEnum;
    sort: number;
    breadcrumb: BreadcrumbItem[];
    uploadMessage: string;
}

function BannerUpdate({ page, sort, breadcrumb, uploadMessage }: BannerUpdateProps) {
    const [visible, setVisible] = useState<boolean>(false);
    const { callApi, loading, setLoading } = useCaller<any>();
    const [banner, setBanner] = useState<UpdateBanner>(initialValue);
    const { modals, openModal, closeModal } = useModal([modalKey]);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            const res = await LayoutService.getBanner(page, sort);
            if (res) {
                setBanner({ ...res, file: undefined });
            }
            setLoading(false);
        };

        fetchApi();
    }, []);

    const onUploadImage = (file: File) => {
        setBanner((prev) => ({
            ...prev,
            file: file,
        }));
    };

    const onSave = async () => {
        setLoading(true);
        const payload = banner;
        if (payload.file) {
            payload.image = (await uploadImage(payload.file)) ?? '';
            payload.file = undefined;
        }
        const result = await callApi(
            ApiRoute.Layout.update(page, ComponentEnum.Banner),
            {
                method: 'PUT',
                body: JSON.stringify(payload),
            },
            uploadMessage,
        );
        if (result.succeeded && result.data) {
            setBanner({ ...result.data, file: undefined });
        }
        setLoading(false);
    };

    const onDelete = () => {
        setBanner((prev) => ({
            ...prev,
            link: '',
            image: '',
            file: undefined,
        }));
    };

    const onEditLink = (_: string, link: string) => {
        setBanner((prev) => ({
            ...prev,
            link: link,
        }));
    };

    return (
        <Fragment>
            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumb} />
                <SaveButton disabled={loading} onClick={() => setVisible(true)}>
                    Lưu
                </SaveButton>
            </div>

            {loading ? (
                <PageLoading />
            ) : (
                <div className="flex flex-wrap gap-10">
                    <UploadCard
                        flag={banner.image !== '' || banner.file !== undefined}
                        src={banner.image}
                        onUpload={onUploadImage}
                        onRemoveImage={onDelete}
                        onChangeImage={onUploadImage}
                    >
                        <CustomButton
                            className="btn-primary"
                            hoverContent={banner.link ? banner.link : 'Thêm đường dẫn banner'}
                            onClick={() =>
                                openModal(modalKey, {
                                    id: banner.id,
                                    link: banner.link,
                                })
                            }
                        >
                            <Link2 />
                        </CustomButton>
                    </UploadCard>
                </div>
            )}

            <ConfirmDialog visible={visible} closeModal={() => setVisible(false)} onSubmit={() => onSave()} />
            <UpdateLinkModal
                visible={modals[modalKey].visible}
                onSubmit={onEditLink}
                closeModal={() => closeModal(modalKey)}
                data={modals[modalKey].data}
            />
        </Fragment>
    );
}

export default BannerUpdate;
