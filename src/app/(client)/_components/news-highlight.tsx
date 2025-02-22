'use client';

import NewsCard from '@/components/card/news.card';
import SectionHeader from '@/components/header/section.header';
import VeritcalSlider from '@/components/section/vertical-slider.section';
import NewsSkeleton from '@/components/skeleton/news.skeleton';
import { CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import NewsService from '@/services/news.service';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface NewsHighlightProps {
    className?: string;
}

const take: number = 6;

function NewsHighlight({ className }: NewsHighlightProps) {
    const { data = [], isLoading } = useQuery<News[]>({
        queryKey: ['client/news-highlight'],
        queryFn: () => NewsService.highlight(take),
        staleTime: 60 * 1000,
    });

    return (
        <div className={cn(className)}>
            <SectionHeader />

            {isLoading ? (
                <VeritcalSlider background="white" className="!py-2 !mt-2" actionBtn>
                    {Array.from({ length: take }).map((_, index) => (
                        <CarouselItem key={index} className="desktop:basis-1/4 basis-1/2 tablet:basis-1/3 tablet:mx-1">
                            <NewsSkeleton />
                        </CarouselItem>
                    ))}
                </VeritcalSlider>
            ) : (
                <VeritcalSlider background="white" className="!py-2 !mt-2" actionBtn>
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="desktop:basis-1/4 basis-1/2 tablet:basis-1/3 tablet:mx-1">
                            <NewsCard
                                code={item.code}
                                image={item.image}
                                title={item.title}
                                shortDescription={item.shortDescription}
                                category={item.category?.name}
                            />
                        </CarouselItem>
                    ))}
                </VeritcalSlider>
            )}
        </div>
    );
}

export default NewsHighlight;
