import { useSprings, animated, ControllerUpdate } from '@react-spring/web';
import { useRef, useEffect, useState } from 'react';

interface BlurTextProps {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Record<string, any>;
    animationTo?: Record<string, any>[];
    easing?: (t: number) => number;
    onAnimationComplete?: () => void;
}

/*
    <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
    />
*/

const BlurText: React.FC<BlurTextProps> = ({
    text = '',
    delay = 200,
    className = '',
    animateBy = 'words',
    direction = 'top',
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = (t: number) => t, // Default linear easing
    onAnimationComplete,
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement | null>(null);
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom =
        direction === 'top'
            ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
            : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

    const defaultTo: Record<string, any>[] = [
        {
            filter: 'blur(5px)',
            opacity: 0.5,
            transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
        },
        { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
    ];

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
        elements.length,
        elements.map((_, i) => ({
            from: animationFrom || defaultFrom,
            to: async (next: (props: ControllerUpdate) => Promise<void>) => {
                if (inView) {
                    for (const step of animationTo || defaultTo) {
                        await next(step);
                    }
                    animatedCount.current += 1;
                    if (animatedCount.current === elements.length && onAnimationComplete) {
                        onAnimationComplete();
                    }
                }
            },
            delay: i * delay,
            config: {
                easing: easing,
            },
        })),
    );

    return (
        <p ref={ref} className={`blur-text ${className}`}>
            {springs.map((props, index) => (
                <animated.span
                    key={index}
                    style={{
                        ...props,
                        display: 'inline-block',
                        willChange: 'transform, filter, opacity',
                    }}
                >
                    {elements[index] === ' ' ? '\u00A0' : elements[index]}
                    {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
                </animated.span>
            ))}
        </p>
    );
};

export default BlurText;
