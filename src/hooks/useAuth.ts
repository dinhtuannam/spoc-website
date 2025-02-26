import AppConstant from '@/constants/app.constant';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface UserData {
    id: string;
    fullname: string;
    avatar: string;
    roleId: number;
    roleName: string;
}

export function useAuth() {
    const [user, setUserState] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Thêm state loading

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem(AppConstant.userData);
            setUserState(data ? JSON.parse(data) : null);
            setIsLoading(false);
        }
    }, []);

    const setUser = (data: any) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(AppConstant.userData, JSON.stringify(data));
            setUserState(data);
        }
    };

    const logout = () => {
        if (typeof window !== 'undefined') {
            Cookies.remove(AppConstant.token);
            localStorage.removeItem(AppConstant.userData);
            setUserState(null);
            window.location.href = '/auth/dang-nhap';
        }
    };

    return { user, setUser, logout, isLoading };
}
