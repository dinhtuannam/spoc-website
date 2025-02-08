'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import { useParams } from 'next/navigation';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sản phẩm',
        link: '/admin/san-pham',
    },
    {
        title: 'Hình ảnh',
        link: '/admin/san-pham/hinh-anh',
    },
];

function Page() {
    const params = useParams();
    const { id } = params;

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4">
                <Breadcrumb values={breadcrumbs} />
            </div>
            <div className="mt-4"></div>
        </div>
    );
}

export default Page;
