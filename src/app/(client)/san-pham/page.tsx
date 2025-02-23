import ProductList from './_components/product.list';
import ProductCategories from '@/app/(client)/san-pham/_components/product-categories';
import { Breadcrumb } from '@/components/breadcrumb';
import SearchBar from '@/components/input/search.input';
import Image from 'next/image';

interface Product {
    id: string;
    name: string;
    price: number;
    unit: string;
    image: string;
}

// Thêm revalidate cho ISR
export const revalidate = 3600; // Revalidate mỗi 1 giờ

export const metadata = {
    title: 'Sản phẩm - SOPC',
    description:
        'Khám phá các sản phẩm chăm sóc mắt chất lượng từ SOPC. Chúng tôi cung cấp đa dạng thuốc và thực phẩm bổ sung giúp bảo vệ và cải thiện sức khỏe đôi mắt của bạn.',
};

// Chuyển thành async function để hỗ trợ data fetching
async function SanPham() {
    const breadcrumb: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/',
        },
        {
            title: 'Sản phẩm',
            link: '/san-pham',
        },
    ];

    return (
        <div className="page-container height-minus">
            <Image
                src={'/templates/trang-chu/DoiMatSang.png'}
                alt={`banner`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
            />
            <div
                id="product__scrollTo"
                className="app-padding flex mobile:flex-col tablet:flex-row justify-between items-center mt-5 laptop:mt-15 desktop:mt-20 mobile:gap-4"
            >
                <Breadcrumb values={breadcrumb} />
                <SearchBar className={'mobile:w-full tablet:max-w-xs'} placeHolder="Tìm kiếm sản phẩm ..." />
            </div>

            <div className="app-padding mobile:grid-cols-1 laptop:grid-cols-4 grid gap-8 my-8">
                <ProductCategories />
                <ProductList />
            </div>
        </div>
    );
}

export default SanPham;
