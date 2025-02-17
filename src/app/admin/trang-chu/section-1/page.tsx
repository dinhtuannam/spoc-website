import DefaultSectionUpdate from '../../_components/default-section-update';
import { PageEnum } from '@/enums/page.enum';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Trang chủ',
        link: '/admin/trang-chu/banner',
    },
    {
        title: 'Section 1',
        link: '/admin/trang-chu/section-1',
    },
];

function Section1() {
    return (
        <div className="page-container admin-padding my-8">
            <DefaultSectionUpdate
                breadcrumb={breadcrumbs}
                page={PageEnum.TrangChu}
                sort={2}
                uploadMessage="Cập nhật section 1 trang chủ thành công"
            />
        </div>
    );
}

export default Section1;
