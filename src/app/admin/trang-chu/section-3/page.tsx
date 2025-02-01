import { Breadcrumb } from '@/components/breadcrumb';
import SaveButton from '@/components/button/save.button';
import UploadCard from '@/components/card/upload.card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

function Section3() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/admin/trang-chu/banner',
        },
        {
            title: 'Section 3',
            link: '/admin/trang-chu/section-3',
        },
    ];
    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumbs} />
                <SaveButton>Lưu</SaveButton>
            </div>

            <div className="space-y-6">
                <div className="w-[min(90vw,750px)] space-y-2">
                    <Label>Tiêu đề</Label>
                    <Input className="app-input" placeholder="Nhập tiêu đề section" />
                </div>

                <div className="w-[min(90vw,750px)] space-y-2">
                    <Label>Mô tả</Label>
                    <Textarea className="h-[194px] app-input" placeholder="Nhập mô tả section" />
                </div>

                <div className="space-y-4">
                    <Label>Hình ảnh</Label>
                    <UploadCard className="w-[305px] h-[270px]" />
                </div>
            </div>
        </div>
    );
}

export default Section3;
