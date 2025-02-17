import DefaultSectionUpdate from '../../_components/default-section-update';
import { PageEnum } from '@/enums/page.enum';
import React from 'react';

function Section2() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Giới thiệu',
            link: '/admin/gioi-thieu/section-2',
        },
        {
            title: 'Section 2',
            link: '/admin/gioi-thieu/section-2',
        },
    ];
    return (
        <div className="page-container admin-padding my-8">
            <DefaultSectionUpdate
                breadcrumb={breadcrumbs}
                page={PageEnum.GioiThieu}
                sort={3}
                uploadMessage="Cập nhật section 2 giới thiệu thành công"
            />
        </div>
    );
}

export default Section2;
