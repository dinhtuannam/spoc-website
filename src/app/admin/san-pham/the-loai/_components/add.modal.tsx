import LoadingButton from '@/components/button/loading.button';
import DrawerContainer from '@/components/container/drawer.container';
import FieldInput from '@/components/map/field.input';
import ApiRoute from '@/constants/api-route';
import GeneratorHelper from '@/helpers/generator.helper';
import useCaller from '@/hooks/useCaller';
import useObjectState from '@/hooks/useObjectState';
import React from 'react';

type CategoryAddModalProps = {
    visible: boolean;
    closeModal: () => void;
    onFetch: () => void;
};

const initialState = {
    id: GeneratorHelper.newGuid(),
    code: '',
    name: '',
};

function CategoryAddModal({ visible, closeModal, onFetch }: CategoryAddModalProps) {
    const { loading, callApi } = useCaller<any>();
    const { state, error } = useObjectState(initialState);

    const handleSubmit = async () => {
        if (state.data.name === '') {
            error.set('name', true, 'Tên danh mục không được để trống');
            return;
        }
        const result = await callApi(
            ApiRoute.ProductCategory.root,
            {
                method: 'POST',
                body: state.data,
            },
            'Thêm mới danh mục thành công',
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
        <DrawerContainer title="Thêm danh mục" open={visible} onClose={handleClose}>
            <div className={'grid items-start gap-4 md:w-[400px] sm:w-full'}>
                <FieldInput
                    label="Tên danh mục"
                    error={error.data.name.flag}
                    msg={error.data.name.msg}
                    className="grid gap-2"
                    id="name"
                    value={state.data.name}
                    onChange={state.change}
                    placeholder="Nhập tên danh mục..."
                />
                <LoadingButton
                    className="mt-2 btn-primary-blue"
                    onClick={handleSubmit}
                    isLoading={loading}
                    loadingText="Đang lưu thay đổi ..."
                >
                    Lưu thay đổi
                </LoadingButton>
            </div>
        </DrawerContainer>
    );
}

export default CategoryAddModal;
