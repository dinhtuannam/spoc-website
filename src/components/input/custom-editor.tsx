'use client';

import { Skeleton } from '@/components/ui/skeleton';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';

// Thư viện UI cho hiệu ứng

const CustomEditor = () => {
    return <CKEditor editor={ClassicEditor as unknown as any} data="<p>Hello world!</p>" />;
};

export default CustomEditor;
