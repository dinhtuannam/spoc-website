'use client';

import NewsCard from '@/components/card/news.card';
import AppGrid from '@/components/grid';
import NewsSkeleton from '@/components/skeleton/news.skeleton';
import ParamConst from '@/constants/param.constant';
import NewsService from '@/services/news.service';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NewsItem {
    category: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

interface NewsListProps {
    items: NewsItem[];
}

export function NewsList({ items }: NewsListProps) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<News[]>([]);
    const searchParams = useSearchParams();
    const danhMuc = searchParams.get(ParamConst.danh_muc);

    useEffect(() => {
        const callApi = async () => {
            setLoading(true);
            const res = await NewsService.search();
            setData(res);
            setLoading(false);
        };

        callApi();
    }, [danhMuc]);

    return (
        <AppGrid rows={3}>
            {loading && Array.from({ length: 6 }).map((_, index) => <NewsSkeleton key={index} />)}

            {data.map((item: News, index) => (
                <NewsCard
                    key={index}
                    code={item.code}
                    title={item.title}
                    shortDescription={item.shortDescription}
                    image={item.image}
                    category={item.category?.name}
                    scroll={false}
                />
            ))}
        </AppGrid>
    );
}
