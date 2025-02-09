'use client';

import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';
import React, { useRef } from 'react';

interface UploadButtonProps {
    onFileSelect?: (file: File) => void;
    accept?: string;
    multiple?: boolean;
    max?: number;
}

function UploadButton({ onFileSelect, accept = 'image/*', multiple = false, max = 1 }: UploadButtonProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            if (multiple) {
                if (files.length > max) {
                    toast({
                        variant: 'destructive',
                        title: 'Thông báo thao tác',
                        description: `Chỉ có thể upload tối đa ${max} file`,
                        duration: 1500,
                    });
                    event.target.value = '';
                    return;
                }
                Array.from(files).forEach((file) => {
                    onFileSelect?.(file);
                });
            } else {
                // Handle single file
                onFileSelect?.(files[0]);
            }
        }
        // Reset input value to allow selecting the same file again
        event.target.value = '';
    };

    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept={accept}
                multiple={multiple}
                onChange={handleFileChange}
            />
            <Button
                variant="outline"
                className="flex items-center gap-2 border-dashed btn-primary"
                onClick={handleClick}
            >
                <Upload size={16} />
                Tải lên
            </Button>
        </>
    );
}

export default UploadButton;
