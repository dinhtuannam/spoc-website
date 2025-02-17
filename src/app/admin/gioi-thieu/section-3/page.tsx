import DefaultSectionUpdate from '../../_components/default-section-update';
import { PageEnum } from '@/enums/page.enum';
import React from 'react';

function Section3() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Giới thiệu',
            link: '/admin/gioi-thieu/section-3',
        },
        {
            title: 'Section 3',
            link: '/admin/gioi-thieu/section-3',
        },
    ];
    return (
        <div className="page-container admin-padding my-8">
            <DefaultSectionUpdate
                breadcrumb={breadcrumbs}
                page={PageEnum.GioiThieu}
                sort={4}
                uploadMessage="Cập nhật section 3 giới thiệu thành công"
            />
        </div>
    );
}

export default Section3;
