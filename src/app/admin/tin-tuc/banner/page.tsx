import BannerUpdate from '../../_components/banner-update';
import { PageEnum } from '@/enums/page.enum';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tin tức',
        link: '/admin/tin-tuc',
    },
    {
        title: 'Banner',
        link: '',
    },
];

function Page() {
    return (
        <div className="page-container admin-padding my-8">
            <BannerUpdate
                page={PageEnum.TinTuc}
                sort={1}
                breadcrumb={breadcrumbs}
                uploadMessage="Cập nhật banner tin tức thành công"
            />
        </div>
    );
}

export default Page;
