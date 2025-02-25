import AppConstant from '@/constants/app.constant';
import Cookies from 'js-cookie';

interface UserData {
    id: string;
    fullname: string;
    avatar: string;
    roleId: number;
    roleName: string;
}

export function useAuth() {
    // Lấy thông tin user từ localStorage
    const getUser = (): UserData | null => {
        const data = localStorage.getItem(AppConstant.userData);
        if (!data) return null;
        return JSON.parse(data);
    };

    // Xử lý đăng xuất
    const logout = () => {
        Cookies.remove(AppConstant.token);
        localStorage.removeItem(AppConstant.userData);
        window.location.href = '/auth/dang-nhap';
    };

    const setUser = (data: any) => {
        localStorage.setItem(AppConstant.userData, JSON.stringify(data));
    };

    return {
        user: getUser(),
        logout,
        setUser,
    };
}
