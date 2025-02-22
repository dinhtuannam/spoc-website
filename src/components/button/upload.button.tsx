'use client';

import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Upload } from 'lucide-react';
import React, { useRef } from 'react';

interface UploadButtonProps {
    onFileSelect?: (file: File) => void;
    onFileMultiSelect?: (files: FileList) => void;
    accept?: string;
    multiple?: boolean;
    max?: number;
    icon?: boolean;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
}

function UploadButton({
    onFileSelect,
    onFileMultiSelect,
    children,
    accept = 'image/*',
    multiple = false,
    max = 1,
    icon = false,
    className,
    disabled = false,
}: UploadButtonProps) {
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

                onFileMultiSelect?.(files);
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
                disabled={disabled}
            />
            <Button
                variant="outline"
                className={cn(className, 'flex items-center gap-2 border-dashed btn-primary')}
                onClick={handleClick}
                disabled={disabled}
            >
                {icon && <Upload size={16} />}
                {children}
            </Button>
        </>
    );
}

export default UploadButton;
