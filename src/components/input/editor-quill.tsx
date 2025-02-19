'use client';

import { Label } from '../ui/label';
import { Skeleton } from '../ui/skeleton';
import ApiRoute from '@/constants/api-route';
import { API_PATH } from '@/lib/axios';
import { cn } from '@/lib/utils';
import { uploadImage } from '@/services/storage.service';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

// Dynamic import để tránh SSR issues
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <Skeleton className="w-full h-52" />,
});

interface EditorQuillProps {
    className?: string;
    label?: string;
    value?: string;
    error?: boolean;
    msg?: string;
    loading?: boolean;
    onChange?: (value: string) => void;
}

function EditorQuill({ className, label, value, onChange, msg, error = false, loading = false }: EditorQuillProps) {
    // Cấu hình các modules cho Quill
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [
                        {
                            font: ['sans-serif', 'Arial', 'Times New Roman'],
                        },
                    ],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ color: [] }, { background: [] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ align: [] }],
                    ['link', 'image'],
                    ['clean'],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
            clipboard: {
                matchVisual: false,
            },
        }),
        [],
    );

    // Cấu hình các định dạng cho Quill
    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        'background',
        'list',
        'bullet',
        'align',
        'link',
        'image',
    ];

    // Xử lý upload hình ảnh
    async function imageHandler() {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
                try {
                    const url = await uploadImage(file);

                    if (url && url !== '') {
                        const quill = (ReactQuill as any).getEditor();
                        const range = quill.getSelection(true);
                        quill.insertEmbed(range.index, 'image', url);
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }
        };
    }

    return (
        <div className={cn('grid gap-2', className)}>
            {label && <Label>{label}</Label>}
            {loading ? (
                <Skeleton className="w-full h-52" />
            ) : (
                <div className={cn('border rounded-md', error && 'border-red-500')}>
                    <ReactQuill
                        theme="snow"
                        value={value || ''}
                        onChange={onChange}
                        modules={modules}
                        formats={formats}
                        className="h-fit bg-white"
                    />
                </div>
            )}
            {error && msg && <p className="text-sm text-red-500">{msg}</p>}
        </div>
    );
}

export default EditorQuill;
