import LoadingButton from '@/components/button/loading.button';
import DrawerContainer from '@/components/container/drawer.container';
import FieldInput from '@/components/input/field.input';
import useObjectState from '@/hooks/useObjectState';
import React, { useEffect } from 'react';

type UpdateLinkModalProps = {
    visible: boolean;
    data: any;
    closeModal: () => void;
    onSubmit: (id: string, link: string) => void;
};

const initialState = {
    id: '',
    link: '',
};

function UpdateLinkModal({ visible, data, closeModal, onSubmit }: UpdateLinkModalProps) {
    const { state, error } = useObjectState(initialState);

    useEffect(() => {
        if (data) {
            state.setData({ link: data.link, id: data.id });
        }
    }, [data]);

    const handleSubmit = async () => {
        error.clear();
        onSubmit(state.data.id, state.data.link);
        closeModal();
    };

    const handleClose = () => {
        error.clear();
        state.setData(initialState);
        closeModal();
    };

    return (
        <DrawerContainer title="Cập nhật đường dẫn banner" open={visible} onClose={handleClose}>
            <div className={'grid items-start gap-1 md:w-[400px] sm:w-full'}>
                <FieldInput
                    label="Dường dẫn banner"
                    className="grid gap-2"
                    id="link"
                    value={state.data.link}
                    onChange={state.change}
                    placeholder="Dường dẫn banner"
                />
                <LoadingButton className="btn-primary-blue" onClick={handleSubmit}>
                    Xác nhận
                </LoadingButton>
            </div>
        </DrawerContainer>
    );
}

export default UpdateLinkModal;
