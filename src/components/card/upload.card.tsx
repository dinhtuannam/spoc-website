'use client';

import DeleteButton from '../button/delete.button';
import UploadButton from '../button/upload.button';
import { Card, CardContent } from '../ui/card';
import AppConstant from '@/constants/app.constant';
import { useImagePreview } from '@/contexts/image-preview-context';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

interface UploadCardProps {
    label?: string;
    src?: string;
    flag?: boolean;
    className?: string;
    children?: React.ReactNode;
    onUpload?: (file: File) => void;
    onChangeImage?: (file: File) => void;
    onRemoveImage?: () => void;
}

export interface UploadCardRef {
    clearSelectedImage: (value?: string | null) => void;
}

const UploadCard = forwardRef<UploadCardRef, UploadCardProps>(function UploadCard(
    {
        children,
        label = 'Hình ảnh',
        src = AppConstant.fallback,
        className = 'w-[480px] h-[270px]',
        flag = false,
        onUpload,
        onRemoveImage,
        onChangeImage,
    },
    ref,
) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { openImage } = useImagePreview();

    useImperativeHandle(ref, () => ({
        clearSelectedImage: (value?: string | null) => setSelectedImage(value ?? null),
    }));

    const imageSrc = selectedImage || (src && src.trim() !== '' ? src : AppConstant.fallback);

    const handleFileSelect = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        if (onUpload) onUpload(file);
    };

    const handleChangeFile = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        onChangeImage?.(file);
    };

    const isFileEmpty = () => {
        return selectedImage === null && imageSrc === AppConstant.fallback;
    };

    const handleClickImage = () => {
        if (isFileEmpty()) {
            return;
        }
        openImage(imageSrc);
    };

    const onRemoveSelectedImage = () => {
        setSelectedImage(null);
        onRemoveImage?.();
    };

    return (
        <Card className="w-fit">
            <CardContent className="!p-0">
                <div className={cn('relative', !isFileEmpty() ? 'bg-gray-100' : 'bg-[#EFEFEF]', className)}>
                    <Image
                        onClick={handleClickImage}
                        src={imageSrc}
                        alt="Preview"
                        fill
                        className={cn('object-cover w-full h-auto', !isFileEmpty() && 'preview')}
                        onError={(e) => (e.currentTarget.src = AppConstant.fallback)}
                    />
                </div>
                <div className="px-4 py-3 flex justify-between items-center border-t gap-2">
                    <span className="text-gray-600 font-semibold">{label}</span>
                    <div className="flex items-center gap-2">
                        {flag ? (
                            <>
                                {children}
                                <UploadButton icon={false} accept="image/*" onFileSelect={handleChangeFile}>
                                    Chỉnh sửa
                                </UploadButton>
                                <DeleteButton onClick={onRemoveSelectedImage}>Xóa</DeleteButton>
                            </>
                        ) : (
                            <UploadButton onFileSelect={handleFileSelect} accept="image/*" icon>
                                Tải lên
                            </UploadButton>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
});

export default UploadCard;
