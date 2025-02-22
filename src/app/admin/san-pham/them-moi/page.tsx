'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import SaveButton from '@/components/button/save.button';
import EditorQuill from '@/components/input/editor-quill';
import FieldSelectApi from '@/components/input/field-select-api';
import FieldInput from '@/components/input/field.input';
import { Card, CardContent } from '@/components/ui/card';
import ApiRoute from '@/constants/api-route';
import AppConstant from '@/constants/app.constant';
import GeneratorHelper from '@/helpers/generator.helper';
import ValidatorHelper from '@/helpers/validator.helper';
import useCaller from '@/hooks/useCaller';
import useObjectState from '@/hooks/useObjectState';
import React, { useEffect } from 'react';

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
    id: GeneratorHelper.newGuid(),
    code: '',
    name: '',
    introduction: '',
    description: '',
    instruction: '',
    price: 0,
    link: '',
    categoryId: '',
    highlight: false,
    markDate: '',
    category: null,
};

function Page() {
    const { state, error } = useObjectState(initialState);
    const { callApi, loading, setLoading } = useCaller<any>();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, AppConstant.delay);

        return () => clearTimeout(timer);
    }, []);

    const validate = () => {
        error.clear();
        let flag: boolean = true;
        if (ValidatorHelper.isEmpty(state.data.name)) {
            error.set('name', true, 'Tên sản phẩm không được để trống');
            flag = false;
        }
        if (ValidatorHelper.isEmpty(state.data.categoryId)) {
            error.set('categoryId', true, 'Danh mục sản phẩm không được để trống');
            flag = false;
        }
        return flag;
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        setLoading(true);
        const payload = state.data;
        const result = await callApi(
            ApiRoute.Product.root,
            {
                method: 'POST',
                body: payload,
            },
            'Thêm sản phẩm thành công',
        );
        if (result.succeeded && result.data) {
            window.location.href = '/admin/san-pham';
        }
        setLoading(false);
    };

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumbs} />
                <SaveButton onClick={handleSubmit} disabled={loading}>
                    Lưu
                </SaveButton>
            </div>
            <Card className="mt-4 ">
                <CardContent className="!py-8 grid items-start gap-2">
                    <div className="grid grid-cols-2 gap-4">
                        <FieldInput
                            loading={loading}
                            label="* Tên sản phẩm"
                            error={error.data.name.flag}
                            msg={error.data.name.msg}
                            className="grid gap-2"
                            id="name"
                            value={state.data.name}
                            onChange={state.change}
                            placeholder="Nhập tên danh mục..."
                        />
                        <FieldSelectApi<ProductCategory>
                            api={ApiRoute.ProductCategory.root}
                            text="* Thể loại"
                            error={error.data.categoryId.flag}
                            msg={error.data.categoryId.msg}
                            className="grid gap-2"
                            value="id"
                            label="name"
                            defaultValue={state.data.categoryId}
                            onChange={(value) => state.setValue('categoryId', value)}
                            placeholder="Chọn danh mục sản phẩm..."
                        />
                    </div>
                    <EditorQuill
                        loading={loading}
                        className="grid gap-2"
                        value={state.data.introduction}
                        onChange={(val) => state.setValue('introduction', val)}
                        label="Giới thiệu"
                        error={error.data.introduction.flag}
                        msg={error.data.introduction.msg}
                    />
                    <EditorQuill
                        loading={loading}
                        className="grid gap-2"
                        value={state.data.description}
                        onChange={(val) => state.setValue('description', val)}
                        label="Mô tả"
                        error={error.data.description.flag}
                        msg={error.data.description.msg}
                    />
                    <EditorQuill
                        loading={loading}
                        className="grid gap-2"
                        value={state.data.instruction}
                        onChange={(val) => state.setValue('instruction', val)}
                        label="Hướng dẫn sử dụng"
                        error={error.data.instruction.flag}
                        msg={error.data.instruction.msg}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default Page;
