import DefaultSectionUpdate from '../../_components/default-section-update';
import { PageEnum } from '@/enums/page.enum';
import React from 'react';

function Section3() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/admin/trang-chu/banner',
        },
        {
            title: 'Section 3',
            link: '/admin/trang-chu/section-3',
        },
    ];
    return (
        <div className="page-container admin-padding my-8">
            <DefaultSectionUpdate
                breadcrumb={breadcrumbs}
                page={PageEnum.TrangChu}
                sort={4}
                uploadMessage="Cập nhật section 3 trang chủ thành công"
            />
        </div>
    );
}

export default Section3;
