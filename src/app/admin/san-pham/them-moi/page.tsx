'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import FieldInput from '@/components/map/field.input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import useObjectState from '@/hooks/useObjectState';
import dynamic from 'next/dynamic';
import React from 'react';

const CustomEditor = dynamic(() => import('@/components/input/custom-editor'), { ssr: false });

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sản phẩm',
        link: '/admin/san-pham',
    },
    {
        title: 'Thêm mới',
        link: '/admin/san-pham/them-moi',
    },
];

const initialState: Product = {
    id: '',
    code: '',
    name: '',
    introduction: '',
    description: '',
    instruction: '',
    price: 0,
    link: '',
    highlight: false,
    markDate: '',
    category: null,
};

function Page() {
    const { state, error } = useObjectState(initialState);

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4">
                <Breadcrumb values={breadcrumbs} />
            </div>
            <Card className="mt-4 ">
                <CardContent className="!py-8 grid items-start gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FieldInput
                            label="Tên sản phẩm"
                            error={error.data.name.flag}
                            msg={error.data.name.msg}
                            className="grid gap-2"
                            id="name"
                            value={state.data.name}
                            onChange={state.change}
                            placeholder="Nhập tên danh mục..."
                        />
                        <FieldInput
                            label="Thể loại"
                            error={error.data.name.flag}
                            msg={error.data.name.msg}
                            className="grid gap-2"
                            id="name"
                            value={state.data.name}
                            onChange={state.change}
                            placeholder="Nhập tên danh mục..."
                        />
                    </div>
                    <FieldInput
                        label="Link sản phẩm"
                        error={error.data.link.flag}
                        msg={error.data.link.msg}
                        className="grid gap-2"
                        id="link"
                        value={state.data.link}
                        onChange={state.change}
                        placeholder="Nhập đường link sản phẩm..."
                    />
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Giới thiệu</Label>
                        <CustomEditor />
                        {error.data.introduction.flag && (
                            <span className="text-red-500 text-xs mt-[-3px]">{error.data.introduction.msg}</span>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Mô tả</Label>
                        <CustomEditor />
                        {error.data.introduction.flag && (
                            <span className="text-red-500 text-xs mt-[-3px]">{error.data.introduction.msg}</span>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Hướng dẫn sử dụng</Label>
                        <CustomEditor />
                        {error.data.introduction.flag && (
                            <span className="text-red-500 text-xs mt-[-3px]">{error.data.introduction.msg}</span>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Page;
