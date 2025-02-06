import { Breadcrumb } from '@/components/breadcrumb';
import UploadCard from '@/components/card/upload.card';

function Page() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Sản phẩm',
            link: '/admin/san-pham',
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

export default Page;
