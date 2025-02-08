import { useState } from 'react';

// const [data, setData] = useObjectState({
//     username: 'abc',
//     email: 'xyz',
//     password: 'bbb',
// });

type ErrorItem = {
    flag: boolean;
    msg: string;
};

function useObjectState<T extends object>(initialState: T) {
    const [data, setData] = useState<T>(initialState);
    const initialErrors: Record<keyof T, ErrorItem> = Object.keys(initialState).reduce((acc, key) => {
        acc[key as keyof T] = { flag: false, msg: '' };
        return acc;
    }, {} as Record<keyof T, ErrorItem>);

    const [errors, setErrors] = useState(initialErrors);

    const setKeyValue = <K extends keyof T>(key: K, value: T[K]) => {
        setData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleObjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;

        let newValue: T[keyof T];

        if (type === 'checkbox') {
            newValue = checked as unknown as T[keyof T];
        } else if (type === 'number') {
            newValue = parseFloat(value) as unknown as T[keyof T];
        } else {
            newValue = value as unknown as T[keyof T];
        }

        setKeyValue(id as keyof T, newValue);
    };

    const setError = <K extends keyof T>(key: K, flag: boolean, msg: string) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [key]: { flag, msg },
        }));
    };

    const clearErrors = () => {
        setErrors(initialErrors);
    };

    return {
        state: {
            data: data,
            setValue: setKeyValue,
            setData: setData,
            change: handleObjectChange,
        },
        error: {
            data: errors,
            clear: clearErrors,
            set: setError,
        },
    } as const;
}

export default useObjectState;
