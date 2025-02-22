'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import SaveButton from '@/components/button/save.button';
import UploadCard from '@/components/card/upload.card';
import ConfirmDialog from '@/components/dialog/confirm.dialog';
import PageLoading from '@/components/loading/page.loading';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ApiRoute from '@/constants/api-route';
import { ComponentEnum } from '@/enums/component.enum';
import { PageEnum } from '@/enums/page.enum';
import GeneratorHelper from '@/helpers/generator.helper';
import ValidatorHelper from '@/helpers/validator.helper';
import useCaller from '@/hooks/useCaller';
import LayoutService from '@/services/layout.service';
import { uploadImage } from '@/services/storage.service';
import React, { Fragment, useEffect, useState } from 'react';

interface DefaultSectionUpdateProps {
    page: PageEnum;
    sort: number;
    breadcrumb: BreadcrumbItem[];
    uploadMessage: string;
}

const initialValue: UpdateDefaultSection = {
    id: GeneratorHelper.newGuid(),
    title: '',
    description: '',
    image: '',
    link: '',
};

function DefaultSectionUpdate({ page, sort, breadcrumb, uploadMessage }: DefaultSectionUpdateProps) {
    const { callApi } = useCaller<any>();
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [section, setSection] = useState<UpdateDefaultSection>(initialValue);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            const res = await LayoutService.getSection(page, sort);
            if (res) {
                setSection({ ...res, file: undefined });
            }
            setLoading(false);
        };

        fetchApi();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSection((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onUploadImage = (file: File) => {
        setSection((prev) => ({
            ...prev,
            file: file,
        }));
    };

    const onChangeImage = (file: File) => {
        setSection((prev) => ({
            ...prev,
            file: file,
        }));
    };

    const onSave = async () => {
        setLoading(true);
        const payload = section;
        if (payload.file) payload.image = (await uploadImage(payload.file)) ?? '';

        const result = await callApi(
            ApiRoute.Layout.update(page, ComponentEnum.DefaultSection, sort),
            {
                method: 'PUT',
                body: JSON.stringify(payload),
            },
            uploadMessage,
        );
        if (result.succeeded && result.data) {
            setSection({ ...result.data, file: undefined });
        }
        setLoading(false);
    };

    const onDelete = () => {
        setSection((prev) => ({
            ...prev,
            image: '',
            file: undefined,
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
                <div className="space-y-6">
                    <div className="w-[min(90vw,750px)] space-y-2">
                        <Label>Tiêu đề</Label>
                        <Input
                            className="app-input"
                            placeholder="Nhập tiêu đề section"
                            name="title"
                            value={section?.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-[min(90vw,750px)] space-y-2">
                        <Label>Mô tả</Label>
                        <Textarea
                            className="h-[194px] app-input"
                            placeholder="Nhập mô tả section"
                            name="description"
                            value={section?.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-4">
                        <Label>Hình ảnh</Label>
                        <UploadCard
                            className="w-96 aspect-[111/100]"
                            flag={!ValidatorHelper.isEmpty(section.image) || section.file !== undefined}
                            src={section.image}
                            onUpload={onUploadImage}
                            onRemoveImage={onDelete}
                            onChangeImage={onChangeImage}
                        />
                    </div>
                </div>
            )}

            <ConfirmDialog visible={visible} closeModal={() => setVisible(false)} onSubmit={() => onSave()} />
        </Fragment>
    );
}

export default DefaultSectionUpdate;
