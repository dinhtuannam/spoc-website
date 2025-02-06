'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, ShoppingBag, Users, FileText } from 'lucide-react';
import Image from 'next/image';

const stats = [
    {
        title: 'Tổng lượt xem',
        value: '246K',
        change: '+20.1%',
        icon: Eye,
        trend: 'up',
    },
    {
        title: 'Sản phẩm',
        value: '56',
        change: '+8.2%',
        icon: ShoppingBag,
        trend: 'up',
    },
    {
        title: 'Khách hàng',
        value: '1,234',
        change: '+12.5%',
        icon: Users,
        trend: 'up',
    },
    {
        title: 'Bài viết',
        value: '89',
        change: '+4.9%',
        icon: FileText,
        trend: 'up',
    },
];

function Page() {
    return (
        <div className="page-container admin-padding">
            {/* Welcome Section */}
            <div className="flex flex-col laptop:flex-row items-center justify-between gap-4 py-8">
                <div className="flex items-center gap-4 flex-col laptop:flex-row">
                    <Image src="/images/logo.png" alt="SOPC" width={120} height={48} className="h-20 w-auto" />
                    <div className="flex flex-col justify-center mt-3 text-center laptop:text-left">
                        <h1 className="text-xl font-bold text-gray-800">Chào mừng trở lại!</h1>
                        <p className="text-gray-500">Đây là tổng quan về hoạt động của website</p>
                    </div>
                </div>
                <div className="text-center laptop:text-right">
                    <p className="text-sm text-gray-500">Hôm nay</p>
                    <p className="text-lg font-medium">
                        {new Date().toLocaleDateString('vi-VN', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className={`text-xs ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                {stat.change} so với tháng trước
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Hoạt động gần đây</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition">
                                <div className="w-2 h-2 rounded-full bg-app-primary" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Cập nhật nội dung trang chủ</p>
                                    <p className="text-xs text-gray-500">2 giờ trước</p>
                                </div>
                                <div className="text-sm text-gray-500">Admin</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Page;
