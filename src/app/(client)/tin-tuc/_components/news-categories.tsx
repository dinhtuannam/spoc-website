'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ParamConst from '@/constants/param.constant';
import GeneratorHelper from '@/helpers/generator.helper';
import NewsCategoryService from '@/services/news-category.service';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const all: NewsCategory = {
    id: GeneratorHelper.newGuid(),
    code: '',
    name: 'Tất cả',
};

export function NewsCategories() {
    const [data, setData] = useState<NewsCategory[]>([all]);
    const searchParams = useSearchParams();
    const danhMuc = searchParams.get('danh_muc');

    useEffect(() => {
        const callApi = async () => {
            const res = await NewsCategoryService.get();
            setData([all, ...res]);
        };

        callApi();
    }, []);

    return (
        <Card className=" h-fit">
            {data.map((item, index) => (
                <Link href={`/tin-tuc?${item.code ? `${ParamConst.danh_muc}=${item.code}` : ''}`} scroll={false}>
                    <Button
                        key={index}
                        variant="ghost"
                        className={`p-4 hover:bg-[#0B6FF8E5] hover:!text-white laptop:p-6 w-full text-lg text-center hover:text-primary tracking-wider text-white
                    ${(!danhMuc && item.code === '') || danhMuc === item.code ? 'bg-[#0B6FF8E5]' : 'bg-[#00000080]'} 
                    rounded-none`}
                    >
                        {item.name}
                    </Button>
                </Link>
            ))}
        </Card>
    );
}
