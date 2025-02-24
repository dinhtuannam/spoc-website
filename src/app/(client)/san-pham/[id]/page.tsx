import { ProductImages } from './_components/product-images';
import { RelatedProducts } from './_components/related-products';
import { Breadcrumb } from '@/components/breadcrumb';
import AppButton from '@/components/button/app.button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AppConstant from '@/constants/app.constant';
import CacheConst from '@/constants/cache.const';
import { API_PATH } from '@/lib/axios';

async function getProduct(id: string): Promise<ProductDetail | null> {
    const res = await fetch(`${API_PATH}/api/Product/code/${id}`, {
        next: { revalidate: CacheConst.isr.page },
    });

    if (!res.ok) return null;
    const tmp = await res.json();
    return tmp.data;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const news = await getProduct(params.id);

    return {
        title: news?.name || 'Sản phẩm - SOPC',
        description: news?.introduction || 'Cập nhật sản phẩm mói nhất từ SOPC',
    };
}

async function ChiTietSanPham({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    const breadcrumb: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/',
        },
        {
            title: 'Sản phẩm',
            link: '/san-pham',
        },
        {
            title: product?.name ?? 'Thông tin sản phẩm',
            link: `/san-pham/${product?.code}`,
        },
    ];

    // Mock data for related products
    const relatedProducts = Array(4).fill({
        id: 'san-pham-khac',
        name: 'Thực phẩm ngũ ngon',
        price: 100000,
        unit: 'Hộp',
        image: '/images/product.png',
    });

    return (
        <div className="page-container height-minus">
            <div className="app-padding mt-5 laptop:mt-10">
                <Breadcrumb values={breadcrumb} />

                {/* Product Overview */}
                <div className="grid laptop:grid-cols-12 gap-6 laptop:gap-10 mt-6 laptop:mt-10">
                    {/* Product Images - 7 cột */}
                    <div className="laptop:col-span-7">{product && <ProductImages images={product?.images} />}</div>

                    {/* Product Info - 5 cột */}
                    <div className="laptop:col-span-5 space-y-6">
                        <h1 className="text-xl text-justify laptop:text-2xl font-bold text-app-primary-blue tracking-wide">
                            {product?.name}
                        </h1>

                        <p className="text-base laptop:text-lg tracking-wide text-justify">{product?.introduction}</p>
                        {/* <div className="flex items-center gap-2">
                            <span className="font-semibold min-w-[90px]">SỐ LƯỢNG</span>
                            <QuantityInput />
                        </div> */}

                        <div className="flex items-center gap-4">
                            <div className="grid mobile:grid-cols-2 gap-4 w-full">
                                {/* <AppButton variant="outline" className="w-full text-sm laptop:text-base">
                                    Thêm vào giỏ hàng
                                </AppButton> */}
                                <AppButton
                                    href={AppConstant.zalo}
                                    className="w-full text-sm laptop:text-base uppercase tracking-wide"
                                >
                                    liên hệ tư vấn
                                </AppButton>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Accordion type="single" collapsible defaultValue="usage" className="w-full">
                                <AccordionItem value="desc" className="border-none">
                                    <AccordionTrigger className="text-base laptop:text-lg font-semibold py-2 hover:no-underline">
                                        MÔ TẢ SẢN PHẨM
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-sm laptop:text-base">
                                        <p className="tracking-wider text-justify">{product?.description}</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="usage" className="border-none">
                                    <AccordionTrigger className="text-base laptop:text-lg font-semibold py-2 hover:no-underline">
                                        HƯỚNG DẪN SỬ DỤNG
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-sm laptop:text-base">
                                        <p className="tracking-wider text-justify">{product?.instruction}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {product && <RelatedProducts id={product.categoryId} title="CÁC SẢN PHẨM KHÁC" />}
            </div>
        </div>
    );
}

export default ChiTietSanPham;
