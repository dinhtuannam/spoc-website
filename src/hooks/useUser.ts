import AppConstant from '@/constants/app.constant';

interface UserData {
    id: string;
    fullname: string;
    avatar: string;
    roleId: number;
    roleName: string;
}

export function useUser() {
    // Lấy thông tin user từ localStorage
    const getUserData = (): UserData | null => {
        const data = localStorage.getItem(AppConstant.userData);
        if (!data) return null;
        return JSON.parse(data);
    };

    return { userData: getUserData() };
}
