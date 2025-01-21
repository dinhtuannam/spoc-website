import { ProductImages } from './_components/product-images';
import { QuantityInput } from './_components/quantity-input';
import { RelatedProducts } from './_components/related-products';
import { Breadcrumb } from '@/components/breadcrumb';
import AppButton from '@/components/button/app.button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata = {
    title: 'Sản phẩm - SPOC',
    description: 'Viên ngũ cốc dinh dưỡng cho trẻ em',
};

function ChiTietSanPham() {
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
            title: 'Viên uống Feroglobin B12 Vitabiotics',
            link: '/san-pham/vien-uong-feroglobin',
        },
    ];

    // Mock data
    const images = Array(4).fill('/images/product.png');

    // Mock data for related products
    const relatedProducts = Array(4).fill({
        id: 'san-pham-khac',
        name: 'Thực phẩm ngũ ngon',
        price: 100000,
        unit: 'Hộp',
        image: '/images/product.png',
    });

    return (
        <div className="page-container">
            <div className="app-padding mt-5 laptop:mt-10">
                <Breadcrumb values={breadcrumb} />

                {/* Product Overview */}
                <div className="grid laptop:grid-cols-12 gap-6 laptop:gap-10 mt-6 laptop:mt-10">
                    {/* Product Images - 7 cột */}
                    <div className="laptop:col-span-7">
                        <ProductImages images={images} />
                    </div>

                    {/* Product Info - 5 cột */}
                    <div className="laptop:col-span-5 space-y-6">
                        <h1 className="text-xl laptop:text-2xl font-bold">
                            Viên uống Feroglobin B12 Vitabiotics hỗ trợ tăng khả năng tạo máu, tăng cường sức khỏe (30
                            viên)
                        </h1>

                        <div className="flex items-center gap-2">
                            <span className="font-semibold min-w-[90px]">SỐ LƯỢNG</span>
                            <QuantityInput />
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="grid mobile:grid-cols-2 gap-4 w-full">
                                <AppButton variant="outline" className="w-full text-sm laptop:text-base">
                                    Thêm vào giỏ hàng
                                </AppButton>
                                <AppButton className="w-full text-sm laptop:text-base">Mua ngay</AppButton>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Accordion type="single" collapsible defaultValue="usage" className="w-full">
                                <AccordionItem value="desc" className="border-none">
                                    <AccordionTrigger className="text-base laptop:text-lg font-semibold py-2 hover:no-underline">
                                        MÔ TẢ SẢN PHẨM
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-sm laptop:text-base">
                                        Feroglobin là sản phẩm bổ sung dinh dưỡng đến từ thương hiệu bổ sung sắt số 1
                                        Anh Quốc. Với thành phần chính là các nguyên tố sắt, kẽm, đồng, vitamin B6, axit
                                        folic và vitamin B12, Feroglobin B12 sẽ hỗ trợ thải phụ sản xuất máu
                                        (haemoglobin) cũng như hỗ trợ duy trì năng lượng và sức sống.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="ingredients" className="border-none">
                                    <AccordionTrigger className="text-base laptop:text-lg font-semibold py-2 hover:no-underline">
                                        THÀNH PHẦN
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-sm laptop:text-base">
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Sắt (Fumarate) (14mg)</li>
                                            <li>Vitamin B12 (Cyanocobalamin) (2.5µg)</li>
                                            <li>Vitamin B6 (Pyridoxine HCI) (2mg)</li>
                                            <li>Axit Folic (400µg)</li>
                                            <li>Kẽm (Gluconate) (1.25mg)</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="usage" className="border-none">
                                    <AccordionTrigger className="text-base laptop:text-lg font-semibold py-2 hover:no-underline">
                                        HƯỚNG DẪN SỬ DỤNG
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-sm laptop:text-base">
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Người lớn và trẻ em trên 12 tuổi: Uống 1 viên/ngày</li>
                                            <li>Nên uống trong hoặc sau bữa ăn</li>
                                            <li>Có thể dùng lâu dài</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <RelatedProducts products={relatedProducts} title="CÁC SẢN PHẨM KHÁC" />
            </div>
        </div>
    );
}

export default ChiTietSanPham;
