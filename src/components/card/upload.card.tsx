'use client';

import CustomButton from '../button/custom.button';
import DeleteButton from '../button/delete.button';
import EditButton from '../button/edit.button';
import UploadButton from '../button/upload.button';
import { Card, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';
import { Link2 } from 'lucide-react';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';

interface UploadCardProps {
    label?: string;
    src?: string;
    flag?: boolean;
    className?: string;
    onUpload?: (file: File) => void;
}

function UploadCard({
    label = 'Hình ảnh',
    src = '/images/empty-img.png',
    className = 'w-[480px] h-[270px]',
    flag = false,
    onUpload,
}: UploadCardProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleFileSelect = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        if (onUpload) onUpload(file);
    };

    return (
        <Card className="w-fit">
            <CardContent className="!p-0">
                <div className={cn('bg-[#EFEFEF] relative', className)}>
                    <Image src={selectedImage || src} alt="Preview" fill className="object-cover w-full h-auto" />
                </div>
                <div className="px-4 py-3 flex justify-between items-center border-t">
                    <span className="text-gray-600 font-semibold">{label}</span>
                    <div className="flex items-center gap-2">
                        {flag ? (
                            <Fragment>
                                <CustomButton className="btn-primary" hoverContent="Đường dẫn banner">
                                    <Link2 />
                                </CustomButton>
                                <EditButton>Chỉnh sửa</EditButton>
                                <DeleteButton>Xóa</DeleteButton>
                            </Fragment>
                        ) : (
                            <UploadButton onFileSelect={handleFileSelect} accept="image/*" />
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default UploadCard;
