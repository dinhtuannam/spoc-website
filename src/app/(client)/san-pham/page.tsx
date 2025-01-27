import ProductCategories from '@/app/(client)/san-pham/_components/product-categories';
import { Breadcrumb } from '@/components/breadcrumb';
import ProductCard from '@/components/card/product.card';
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
    title: 'Sản phẩm - SPOC',
    description: 'Viên ngũ cốc dinh dưỡng cho trẻ em',
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

    // Giả lập data, trong thực tế có thể fetch từ API
    const products: Product[] = Array(6).fill({
        id: 'san-pham-sach',
        name: 'Thực phẩm ngũ ngon',
        price: 100000,
        unit: 'Hộp',
        image: '/images/product.png',
    });

    return (
        <div className="page-container height-minus">
            <Image
                src={'/images/banner-sp.png'}
                alt={`banner`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxHeight: '615px', objectFit: 'cover' }}
                priority
            />
            <div className="app-padding flex mobile:flex-col tablet:flex-row justify-between items-center mt-5 laptop:mt-15 desktop:mt-20 mobile:gap-4">
                <Breadcrumb values={breadcrumb} />
                <SearchBar className={'mobile:w-full tablet:max-w-xs'} placeHolder="Tìm kiếm sản phẩm ..." />
            </div>

            <div className="app-padding mobile:grid-cols-1 laptop:grid-cols-4 grid gap-8 my-8">
                <ProductCategories />

                <div className="mobile:col-span-1 laptop:col-span-3">
                    <div className="grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <ProductCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SanPham;
