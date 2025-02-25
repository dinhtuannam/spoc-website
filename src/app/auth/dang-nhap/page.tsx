'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ApiRoute from '@/constants/api-route';
import AppConstant from '@/constants/app.constant';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { API } from '@/lib/axios';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const dynamic = 'force-static';

interface FormErrors {
    username?: string;
    password?: string;
}

interface LoginResponse {
    id: string;
    fullname: string;
    avatar: string;
    roleId: number;
    roleName: string;
    token: {
        value: string;
        validTo: string;
    };
}

function DangNhap() {
    const router = useRouter();
    const { toast } = useToast();
    const { setUser } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);

    // Regex để kiểm tra ký tự hợp lệ (chỉ cho phép chữ và số)
    const validCharacters = /^[a-zA-Z0-9]*$/;

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!username.trim()) {
            newErrors.username = 'Vui lòng nhập tên đăng nhập';
        }

        if (!password.trim()) {
            newErrors.password = 'Vui lòng nhập mật khẩu';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Chỉ cập nhật nếu value rỗng hoặc chỉ chứa ký tự hợp lệ
        if (value === '' || validCharacters.test(value)) {
            setUsername(value);
            setErrors((prev) => ({ ...prev, username: undefined }));
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Chỉ cập nhật nếu value rỗng hoặc chỉ chứa ký tự hợp lệ
        if (value === '' || validCharacters.test(value)) {
            setPassword(value);
            setErrors((prev) => ({ ...prev, password: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            setLoading(true);
            const res = await API.post<ApiRes<LoginResponse>>(ApiRoute.Auth.login, {
                username: username.trim(),
                password: password.trim(),
            });

            if (res.data.succeeded && res.data.data) {
                const { token, ...userData } = res.data.data;

                // Lưu token vào cookie
                Cookies.set(AppConstant.token, token.value, {
                    expires: new Date(token.validTo),
                    secure: true,
                    sameSite: 'strict',
                });

                setUser(userData);

                toast({
                    variant: 'success',
                    title: 'Thành công',
                    description: 'Đăng nhập thành công',
                    duration: 2000,
                });

                setTimeout(() => {
                    router.replace('/admin');
                }, 2000);
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Thông báo',
                    description: res.data.errorMessage || 'Tên đăng nhập hoặc mật khẩu không chính xác',
                });
            }
        } catch (error) {
            console.error('Login error:', error);
            toast({
                variant: 'destructive',
                title: 'Thông báo',
                description: 'Có lỗi xảy ra, vui lòng thử lại sau',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center p-4">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/auth.png" alt="Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-app-primary-blue/50" />
            </div>

            {/* Login Form Card */}
            <div className="w-full max-w-[480px] bg-white rounded-2xl p-8 shadow-lg z-10">
                {/* Logo */}
                <Link href="/" className="flex justify-center mb-6">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={120}
                        height={48}
                        className="h-12 w-auto hover:scale-105 transition"
                    />
                </Link>

                {/* Title */}
                <div className="text-center mb-8">
                    <p className="text-gray-600">Vui lòng nhập tên tài khoản và mật khẩu để tiếp tục.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Tên đăng nhập</Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Nhập tên đăng nhập..."
                            value={username}
                            onChange={handleUsernameChange}
                            className={errors.username ? 'border-red-500' : ''}
                            required
                        />
                        {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password">Mật khẩu</Label>
                            <Link href="/auth/quen-mat-khau" className="text-sm text-app-primary hover:underline">
                                Quên mật khẩu?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Nhập mật khẩu..."
                            value={password}
                            onChange={handlePasswordChange}
                            className={errors.password ? 'border-red-500' : ''}
                            required
                        />
                        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember"
                            checked={rememberMe}
                            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        />
                        <label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Ghi nhớ tôi
                        </label>
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 text-base bg-app-primary hover:bg-app-primary-hover"
                        disabled={loading}
                    >
                        {loading ? 'ĐANG XÁC THỰC THÔNG TIN...' : 'ĐĂNG NHẬP'}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default DangNhap;
