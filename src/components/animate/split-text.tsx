import { useSprings, animated, SpringValue, ControllerUpdate, EasingFunction } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
    text?: string;
    className?: string;
    delay?: number;
    animationFrom?: Record<string, any>;
    animationTo?: Record<string, any>;
    easing?: EasingFunction;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    onLetterAnimationComplete?: () => void;
}

export const splitTextConfig: SplitTextProps = {
    className: 'text-2xl font-semibold text-center',
    delay: 150,
    animationFrom: { opacity: 0, transform: 'translate3d(0,50px,0)' },
    animationTo: { opacity: 1, transform: 'translate3d(0,0,0)' },
    threshold: 0.2,
    rootMargin: '-50px',
};

/*
    <SplitText
        text="Hello, Tailwind!"
        className="text-2xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
    />
*/

const SplitText: React.FC<SplitTextProps> = ({
    text = '',
    className = '',
    delay = 100,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    easing = (t: number) => t, // Default linear easing
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
}) => {
    const letters = text.split('');
    const [inView, setInView] = useState<boolean>(false);
    const ref = useRef<HTMLParagraphElement | null>(null);
    const animatedCount = useRef<number>(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: animationFrom,
            to: async (next: (props: ControllerUpdate) => Promise<void>) => {
                if (inView) {
                    await next(animationTo);
                    animatedCount.current += 1;
                    if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                        onLetterAnimationComplete();
                    }
                }
            },
            delay: i * delay,
            config: {
                duration: 500,
                easing: easing as (t: number) => number,
            },
        })),
    );

    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={
                {
                    textAlign: textAlign,
                    display: 'inline',
                    overflow: 'hidden',
                } as React.CSSProperties
            }
        >
            {springs.map((props, index) => (
                <animated.span
                    key={index}
                    style={
                        {
                            ...props,
                            display: 'inline-block',
                            willChange: 'transform, opacity',
                        } as React.CSSProperties
                    }
                >
                    {letters[index] === ' ' ? '\u00A0' : letters[index]}
                </animated.span>
            ))}
        </p>
    );
};

export default SplitText;
