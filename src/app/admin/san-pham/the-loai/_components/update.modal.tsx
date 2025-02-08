import LoadingButton from '@/components/button/loading.button';
import DrawerContainer from '@/components/container/drawer.container';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ApiRoute from '@/constants/api-route';
import GeneratorHelper from '@/helpers/generator.helper';
import useCaller from '@/hooks/useCaller';
import useObjectState from '@/hooks/useObjectState';
import React, { useEffect } from 'react';

type CategoryUpdateModalProps = {
    visible: boolean;
    data: ProductCategory;
    closeModal: () => void;
    onFetch: () => void;
};

const initialState = {
    id: GeneratorHelper.newGuid(),
    code: '',
    name: '',
};

function CategoryUpdateModal({ visible, data, closeModal, onFetch }: CategoryUpdateModalProps) {
    const { loading, callApi } = useCaller<any>();
    const { state, error } = useObjectState(initialState);

    useEffect(() => {
        if (data) {
            state.setData(data);
        }
    }, [data]);

    const handleSubmit = async () => {
        if (state.data.name === '') {
            error.set('name', true, 'Tên thể loại không được để trống');
            return;
        }
        const result = await callApi(
            ApiRoute.ProductCategory.root,
            {
                method: 'PUT',
                body: state.data,
            },
            'Thêm mới thể loại thành công',
        );
        if (result.succeeded) {
            error.clear();
            onFetch();
            closeModal();
        }
    };

    const handleClose = () => {
        error.clear();
        state.setData(initialState);
        closeModal();
    };

    return (
        <DrawerContainer title="Cập nhật thể loại" open={visible} onClose={handleClose}>
            <div className={'grid items-start gap-4 md:w-[400px] sm:w-full'}>
                <div className="grid gap-2">
                    <Label htmlFor="phone">Mã thể loại</Label>
                    <Input id="name" value={state.data.code} disabled placeholder="Mã thể loại" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="phone">Tên thể loại</Label>
                    <Input
                        id="name"
                        value={state.data.name}
                        onChange={state.change}
                        placeholder="Nhập tên thể loại..."
                    />
                    {error.data.name.flag && (
                        <span className="text-red-500 text-xs mt-[-3px]">*{error.data.name.msg}</span>
                    )}
                </div>
                <LoadingButton className="mt-2 btn-primary-blue" onClick={handleSubmit} isLoading={loading}>
                    Lưu thay đổi
                </LoadingButton>
            </div>
        </DrawerContainer>
    );
}

export default CategoryUpdateModal;
