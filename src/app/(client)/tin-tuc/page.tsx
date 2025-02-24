import TinTucBanner from './_components/banner';
import { NewsCategories } from './_components/news-categories';
import { NewsList } from './_components/news-list';
import { SubscribeForm } from './_components/subscribe-form';
import { Breadcrumb } from '@/components/breadcrumb';
import SearchBar from '@/components/input/search.input';
import { Suspense } from 'react';

export const metadata = {
    title: 'Tin tức - Nhãn Khoa Sài Gòn - SOPC',
    description:
        'Cập nhật những tin tức mới nhất về Nhãn Khoa Sài Gòn - SOPC, các sản phẩm chăm sóc mắt, kiến thức sức khỏe thị giác và các chương trình khuyến mãi hấp dẫn.',
};

const breadcrumb: BreadcrumbItem[] = [
    {
        title: 'Trang chủ',
        link: '/',
    },
    {
        title: 'Tin tức',
        link: '/tin-tuc',
    },
];

function TinTuc() {
    return (
        <div className="page-container height-minus">
            <TinTucBanner />
            <div className="app-padding mt-5 laptop:mt-10" id="news__scrollTo">
                <div className="flex justify-between items-center">
                    <Breadcrumb values={breadcrumb} />
                    <div className="w-[300px]">
                        <Suspense>
                            <SearchBar />
                        </Suspense>
                    </div>
                </div>
                <div className="grid laptop:grid-cols-4 gap-6 laptop:gap-8 mt-6 laptop:mt-10">
                    <div className="space-y-6">
                        <Suspense>
                            <NewsCategories />
                        </Suspense>
                        <SubscribeForm />
                    </div>
                    <div className="laptop:col-span-3">
                        <Suspense>
                            <NewsList />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinTuc;
