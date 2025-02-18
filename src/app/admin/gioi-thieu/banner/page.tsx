import BannerUpdate from '../../_components/banner-update';
import { PageEnum } from '@/enums/page.enum';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Giới thiệu',
        link: '/admin/gioi-thieu',
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
                page={PageEnum.GioiThieu}
                sort={1}
                breadcrumb={breadcrumbs}
                uploadMessage="Cập nhật banner giới thiệu thành công"
            />
        </div>
    );
}

export default Banner;
