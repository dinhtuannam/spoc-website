'use client';

import CustomButton from '../button/custom.button';
import DeleteButton from '../button/delete.button';
import EditButton from '../button/edit.button';
import UploadButton from '../button/upload.button';
import { Card, CardContent } from '../ui/card';
import { useImagePreview } from '@/contexts/image-preview-context';
import { cn } from '@/lib/utils';
import { Link2, LucideTrash, Trash, Trash2, TrashIcon } from 'lucide-react';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';

interface UploadCardProps {
    label?: string;
    src?: string;
    flag?: boolean;
    className?: string;
    children?: React.ReactNode;
    onUpload?: (file: File) => void;
}

function UploadCard({
    children,
    label = 'Hình ảnh',
    src = '/images/empty-img.png',
    className = 'w-[480px] h-[270px]',
    flag = false,
    onUpload,
}: UploadCardProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { openImage } = useImagePreview();

    // Kiểm tra nếu src rỗng thì gán ảnh mặc định
    const imageSrc = selectedImage || (src && src.trim() !== '' ? src : '/images/empty-img.png');

    const handleFileSelect = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        if (onUpload) onUpload(file);
    };

    const isFileEmpty = () => {
        return selectedImage === null && imageSrc === '/images/empty-img.png';
    };

    const handleClickImage = () => {
        if (isFileEmpty()) {
            return;
        }
        openImage(imageSrc);
    };

    return (
        <Card className="w-fit">
            <CardContent className="!p-0">
                <div className={cn('relative', !isFileEmpty() ? 'bg-black' : 'bg-[#EFEFEF]', className)}>
                    <Image
                        onClick={handleClickImage}
                        src={imageSrc}
                        alt="Preview"
                        fill
                        className={cn('object-cover w-full h-auto', !isFileEmpty() && 'preview')}
                    />
                    {selectedImage !== null && (
                        <div
                            className="rounded-md absolute top-4 right-4 w-fit p-1.5 cursor-pointer btn-danger"
                            onClick={() => setSelectedImage(null)}
                        >
                            <Trash2 className="mr-[-1.1px]" />
                        </div>
                    )}
                </div>
                <div className="px-4 py-3 flex justify-between items-center border-t gap-2">
                    <span className="text-gray-600 font-semibold">{label}</span>
                    <div className="flex items-center gap-2">
                        {flag ? children : <UploadButton onFileSelect={handleFileSelect} accept="image/*" />}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default UploadCard;
