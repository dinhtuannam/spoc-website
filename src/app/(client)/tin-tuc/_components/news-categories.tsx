'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import ParamConst from '@/constants/param.constant';
import NewsCategoryService from '@/services/news-category.service';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export function NewsCategories() {
    const searchParams = useSearchParams();
    const danhMuc = searchParams.get(ParamConst.danh_muc);

    const { data = [], isLoading } = useQuery<NewsCategory[]>({
        queryKey: ['client/news-category'],
        queryFn: () => NewsCategoryService.menu(),
        staleTime: 60 * 1000,
    });

    return (
        <Card className="h-fit !p-0">
            {isLoading
                ? Array.from({ length: 4 }).map((_, index) => (
                      <Skeleton key={index} className="h-12 w-full mb-1 rounded-lg" />
                  ))
                : data.map((item, index) => (
                      <Link
                          key={index}
                          href={`/tin-tuc?${item.code ? `${ParamConst.danh_muc}=${item.code}` : ''}`}
                          scroll={false}
                      >
                          <Button
                              variant="ghost"
                              className={`p-4 hover:bg-[#0B6FF8E5] hover:!text-white laptop:p-6 w-full text-lg text-center tracking-wider text-white
                        ${
                            (!danhMuc && item.code === '') || danhMuc === item.code
                                ? 'bg-[#0B6FF8E5]'
                                : 'bg-[#00000080]'
                        } 
                        rounded-none`}
                          >
                              {item.name}
                          </Button>
                      </Link>
                  ))}
        </Card>
    );
}
