import BannerUpdate from '../../_components/banner-update';
import { PageEnum } from '@/enums/page.enum';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sản phẩm',
        link: '/admin/san-pham',
    },
    {
        title: 'Banner',
        link: '',
    },
];

function Banner() {
    return (
        <div className="page-container admin-padding my-8">
            <BannerUpdate
                page={PageEnum.SanPham}
                sort={1}
                breadcrumb={breadcrumbs}
                uploadMessage="Cập nhật banner sản phẩm thành công"
            />
        </div>
    );
}

export default Banner;
