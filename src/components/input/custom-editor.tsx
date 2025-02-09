'use client';

import { Label } from '../ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';

interface CustomEditor {
    className?: string;
    label?: string;
    data?: string;
    error?: boolean;
    msg?: string;
    loading?: boolean;
    onChange?: (text: string) => void;
}

const CustomEditor = ({ className, label, data, onChange, msg, error = false, loading = false }: CustomEditor) => {
    return (
        <div className={cn(className)}>
            {label && <Label htmlFor="phone">{label}</Label>}
            {loading ? (
                <Skeleton className="w-full h-36" />
            ) : (
                <CKEditor
                    editor={ClassicEditor as unknown as any}
                    data={data}
                    onChange={(_, editor) => {
                        const data = editor.getData();
                        if (onChange) onChange(data);
                    }}
                />
            )}
            {error && <span className="text-red-500 text-xs mt-[-3px]">{msg}</span>}
        </div>
    );
};

export default CustomEditor;
