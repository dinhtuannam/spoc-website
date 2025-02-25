import AppConstant from './constants/app.constant';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Lấy token từ cookies
    const token = request.cookies.get(AppConstant.token)?.value;

    // Kiểm tra nếu đang truy cập route admin
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Nếu không có token, redirect về trang đăng nhập
        if (!token) {
            const loginUrl = new URL('/auth/dang-nhap', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Nếu đã đăng nhập và cố truy cập trang đăng nhập
    if (request.nextUrl.pathname.startsWith('/auth') && token) {
        // Redirect về trang admin
        const adminUrl = new URL('/admin', request.url);
        return NextResponse.redirect(adminUrl);
    }

    return NextResponse.next();
}

// Chỉ áp dụng middleware cho các routes này
export const config = {
    matcher: ['/admin/:path*', '/auth/:path*'],
};
