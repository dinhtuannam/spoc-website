'use client';

import NewsCard from '@/components/card/news.card';
import PaginationCard from '@/components/card/pagination.card';
import AppGrid from '@/components/grid';
import NewsSkeleton from '@/components/skeleton/news.skeleton';
import CacheConst from '@/constants/cache.const';
import ParamConst from '@/constants/param.constant';
import Formatter from '@/helpers/format.helper';
import NewsService from '@/services/news.service';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { Fragment } from 'react';

export function NewsList() {
    const searchParams = useSearchParams();
    const category = searchParams.get(ParamConst.danh_muc);
    const page = searchParams.get(ParamConst.page);
    const size = searchParams.get(ParamConst.pageSize);
    const query = searchParams.get(ParamConst.search);

    const { data, isLoading } = useQuery<PaginatedData<NewsOverview>>({
        queryKey: ['client/news', category, page, size, Formatter.paramSearch(query)],
        queryFn: () =>
            NewsService.search({
                pageIndex: Formatter.paramNumber(page, 1),
                pageSize: Formatter.paramNumber(size, 9),
                category: Formatter.paramStr(category, ''),
                textSearch: Formatter.paramSearch(query),
            }),
        staleTime: CacheConst.query.list,
    });

    return (
        <Fragment>
            <AppGrid rows={3}>
                {isLoading && Array.from({ length: 6 }).map((_, index) => <NewsSkeleton key={index} />)}

                {!isLoading &&
                    data?.items?.map((item: NewsOverview, index) => (
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
            <div className="mt-8">
                {data && <PaginationCard data={data} scrollTo="news__scrollTo" size={9} sizes={[9, 18, 27, 36]} />}
            </div>
        </Fragment>
    );
}
