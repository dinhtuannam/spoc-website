import AppButton from '../button/app.button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface VerticalSliderProps {
    background: 'white' | 'gray';
    title?: string;
    description?: string;
    link?: string;
    className?: string;
    actionBtn?: boolean;
    children: React.ReactNode;
}

function VerticalSliderSection({
    background,
    children,
    title,
    description,
    className,
    link,
    actionBtn = false,
}: VerticalSliderProps) {
    return (
        <div
            className={cn(
                'w-full mt-10 py-10 tablet:py-15 laptop:py-20 app-padding',
                className,
                background === 'gray' ? 'bg-gray-100' : 'bg-white',
            )}
        >
            {(title || description) && (
                <div className="text-center mx-auto max-w-[35rem] mb-4 tablet:mb-10">
                    {title && <h1 className="text-title text-app-primary-blue">{title}</h1>}
                    {description && <p className="mt-2 tablet:mt-4 text-description">{description}</p>}
                </div>
            )}
            <div>
                <Carousel>
                    <CarouselContent>{children}</CarouselContent>

                    {actionBtn && (
                        <>
                            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/30 text-white p-4 desktop:p-6 rounded-full" />
                            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/30 text-white p-4 desktop:p-6 rounded-full" />
                        </>
                    )}
                </Carousel>
            </div>
            {link && (
                <div className="flex justify-center mt-5 tablet:mt-10">
                    <AppButton>KHÁM PHÁ</AppButton>
                </div>
            )}
        </div>
    );
}

export default VerticalSliderSection;
