import { useState } from 'react';

interface ModalState {
    visible: boolean;
    data: any;
}

type ModalStates = {
    [key: string]: ModalState;
};

function useModal(keys: string[]) {
    const [modals, setModals] = useState<ModalStates>(() => {
        const initialState: ModalStates = {};
        keys.forEach((key) => {
            initialState[key] = {
                visible: false,
                data: null,
            };
        });
        return initialState;
    });

    const setModalState = (key: string, newState: Partial<ModalState>) => {
        setModals((prevState) => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                ...newState,
            },
        }));
    };

    const openModal = (key: string, data: any = null) => {
        if (key in modals) {
            setModalState(key, { visible: true, data });
        }
    };

    const closeModal = (key: string) => {
        if (key in modals) {
            setModalState(key, { visible: false, data: null });
        }
    };

    return { modals, openModal, closeModal };
}

export default useModal;
