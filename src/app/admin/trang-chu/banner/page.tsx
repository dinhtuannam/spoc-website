import { Breadcrumb } from '@/components/breadcrumb';
import UploadCard from '@/components/card/upload.card';

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
    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4">
                <Breadcrumb values={breadcrumbs} />
            </div>

            <div className="flex flex-wrap gap-10">
                <UploadCard flag src={'/images/banner.png'} />
                <UploadCard />
                <UploadCard />
                <UploadCard />
            </div>
        </div>
    );
}

export default Banner;
