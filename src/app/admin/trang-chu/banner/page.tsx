'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import CustomButton from '@/components/button/custom.button';
import DeleteButton from '@/components/button/delete.button';
import EditButton from '@/components/button/edit.button';
import UploadCard from '@/components/card/upload.card';
import { Link2 } from 'lucide-react';
import { Fragment } from 'react';

function Banner() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/admin/trang-chu/banner',
        },
        {
            title: 'Banner',
            link: '',
        },
    ];

    const ButtonComponent = () => {
        return (
            <Fragment>
                <CustomButton className="btn-primary" hoverContent="Đường dẫn banner">
                    <Link2 />
                </CustomButton>
                <EditButton>Chỉnh sửa</EditButton>
                <DeleteButton>Xóa</DeleteButton>
            </Fragment>
        );
    };

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4">
                <Breadcrumb values={breadcrumbs} />
            </div>

            <div className="flex flex-wrap gap-10">
                <UploadCard flag src={'/images/banner.png'}>
                    {ButtonComponent()}
                </UploadCard>
                <UploadCard>{ButtonComponent()}</UploadCard>
                <UploadCard>{ButtonComponent()}</UploadCard>
                <UploadCard>{ButtonComponent()}</UploadCard>
            </div>
        </div>
    );
}

export default Banner;
