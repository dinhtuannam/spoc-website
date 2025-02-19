'use client';

import ErrorLabel from '../label/error.label';
import { Label } from '../ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';

interface CustomEditor {
    className?: string;
    label?: string;
    data?: string;
    error?: boolean;
    msg?: string;
    loading?: boolean;
    onChange?: (text: string) => void;
}

const editorConfiguration = {
    toolbar: [
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'fontFamily',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'strikethrough',
        'underline',
        'subscript',
        'superscript',
        '|',
        'alignment',
        '|',
        'numberedList',
        'bulletedList',
        '|',
        'outdent',
        'indent',
        '|',
        'link',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        '|',
        'imageUpload',
        '|',
        'removeFormat',
    ],
    image: {
        toolbar: [
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'linkImage',
        ],
        upload: {
            types: ['jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'],
            // Cấu hình upload adapter của bạn
            uploadUrl: '/api/upload-image', // API endpoint để upload ảnh
        },
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties', 'tableProperties'],
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
        ],
    },
    fontSize: {
        options: ['tiny', 'small', 'default', 'big', 'huge'],
    },
    fontFamily: {
        options: ['default', 'Arial', 'Roboto', 'Times New Roman'],
    },
};

const CustomEditor = ({ className, label, data, onChange, msg, error = false, loading = false }: CustomEditor) => {
    return (
        <div className={cn(className)}>
            {label && <Label htmlFor="phone">{label}</Label>}
            {loading ? (
                <Skeleton className="w-full h-36" />
            ) : (
                <CKEditor
                    editor={ClassicEditor as any}
                    config={editorConfiguration as any}
                    data={data}
                    onChange={(_, editor) => {
                        const data = editor.getData();
                        if (onChange) onChange(data);
                    }}
                />
            )}
            <ErrorLabel>{msg}</ErrorLabel>
        </div>
    );
};

export default CustomEditor;
