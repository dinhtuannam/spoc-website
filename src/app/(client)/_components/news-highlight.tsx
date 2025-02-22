import NewsCard from '@/components/card/news.card';
import SectionHeader from '@/components/header/section.header';
import VeritcalSlider from '@/components/section/vertical-slider.section';
import { CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import React from 'react';

interface NewsHighlightProps {
    className?: string;
}

function NewsHighlight({ className }: NewsHighlightProps) {
    return (
        <div className={cn(className)}>
            <SectionHeader />
            <VeritcalSlider background="white" className="!py-2 !mt-2" actionBtn>
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="desktop:basis-1/4 basis-1/2 tablet:basis-1/3 tablet:mx-1">
                        <NewsCard
                            code="abc"
                            image="/images/news.jpeg"
                            title="Tập thể dục 10 phút mỗi ngày lợi như thế nào?"
                            shortDescription="Với thói quen tập thể dục 10 phút mỗi ngày, bạn sẽ có..."
                            category="Lối sống khỏe"
                        />
                    </CarouselItem>
                ))}
            </VeritcalSlider>
        </div>
    );
}

export default NewsHighlight;
