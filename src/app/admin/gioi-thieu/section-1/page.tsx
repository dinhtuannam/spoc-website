import DefaultSectionUpdate from '../../_components/default-section-update';
import { PageEnum } from '@/enums/page.enum';
import React from 'react';

function Section1() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Giới thiệu',
            link: '/admin/gioi-thieu/section-1',
        },
        {
            title: 'Section 1',
            link: '',
        },
    ];
    return (
        <div className="page-container admin-padding my-8">
            <DefaultSectionUpdate
                breadcrumb={breadcrumbs}
                page={PageEnum.GioiThieu}
                sort={2}
                uploadMessage="Cập nhật section 1 giới thiệu thành công"
            />
        </div>
    );
}

export default Section1;
