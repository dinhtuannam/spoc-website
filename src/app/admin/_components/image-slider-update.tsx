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
import useCaller from '@/hooks/useCaller';
import LayoutService from '@/services/layout.service';
import { uploadImage } from '@/services/storage.service';
import React, { Fragment, useEffect, useState } from 'react';

const initialValue: UpdateImageSlider = {
    id: GeneratorHelper.newGuid(),
    title: '',
    description: '',
    images: [],
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Trang chủ',
        link: '/admin/trang-chu/banner',
    },
    {
        title: 'Section 2',
        link: '/admin/trang-chu/section-1',
    },
];

function ImageSliderUpdate() {
    const [visible, setVisible] = useState<boolean>(false);
    const { callApi, loading, setLoading } = useCaller<any>();
    const [slider, setSlider] = useState<UpdateImageSlider>(initialValue);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            const res = await LayoutService.trangChu.getSlider();
            if (res) {
                setSlider({ ...res });
            }
            setLoading(false);
        };
        fetchApi();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSlider((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onDelete = (id: string) => {
        setSlider((prev) => ({
            ...prev,
            images: prev.images.map((image) => (image.id === id ? { ...image, url: '', file: undefined } : image)),
        }));
    };

    const onUploadImage = (id: string, file: File) => {
        setSlider((prev) => ({
            ...prev,
            images: prev.images.map((image) => (image.id === id ? { ...image, file: file } : image)),
        }));
    };

    const onSave = async () => {
        setLoading(true);
        const payload = slider;
        await Promise.all(
            payload.images.map(async (item) => {
                if (item.file) {
                    item.url = (await uploadImage(item.file)) ?? '';
                    item.file = undefined;
                }
            }),
        );
        const result = await callApi(
            ApiRoute.Layout.update(PageEnum.TrangChu, ComponentEnum.ImageSlider),
            {
                method: 'PUT',
                body: JSON.stringify(payload),
            },
            'Lưu section 2 trang chủ thành công',
        );
        if (result.succeeded) {
            setSlider(result.data);
        }
        setLoading(false);
    };

    return (
        <Fragment>
            <ConfirmDialog visible={visible} closeModal={() => setVisible(false)} onSubmit={() => onSave()} />

            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumbs} />
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
                            value={slider?.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-[min(90vw,750px)] space-y-2">
                        <Label>Mô tả</Label>
                        <Textarea
                            className="h-[194px] app-input"
                            placeholder="Nhập mô tả section"
                            name="description"
                            value={slider?.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-4">
                        <Label>Hình ảnh</Label>
                        <div className="flex flex-wrap gap-10">
                            {slider.images.map((item, index) => {
                                return (
                                    <UploadCard
                                        className="w-80 aspect-[79/100]"
                                        flag={item.url !== '' || item.file !== undefined}
                                        src={item.url}
                                        key={index}
                                        onUpload={(file: File) => onUploadImage(item.id, file)}
                                        onRemoveImage={() => onDelete(item.id)}
                                        onChangeImage={(file: File) => onUploadImage(item.id, file)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default ImageSliderUpdate;
