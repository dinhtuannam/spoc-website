'use client';

import { useSpring, animated, SpringConfig } from '@react-spring/web';
import { useRef, useEffect, useState, ReactNode } from 'react';

// Factory function trả về các tham số cho AnimatedContent
export const createAnimatedConfig = (overrides: Partial<AnimatedContentProps> = {}): AnimatedContentProps => {
    return {
        distance: 100,
        direction: 'vertical',
        reverse: false,
        config: { tension: 50, friction: 25 },
        initialOpacity: 0,
        animateOpacity: true,
        scale: 1,
        threshold: 0.1,
        ...overrides, // Ghi đè giá trị mặc định nếu cần
    };
};

type AnimatedContentProps = {
    children?: ReactNode; // Nội dung bên trong (React elements hoặc text)
    distance?: number; // Khoảng cách dịch chuyển (mặc định 100)
    direction?: 'vertical' | 'horizontal'; // Hướng dịch chuyển ("vertical" hoặc "horizontal")
    reverse?: boolean; // Đảo ngược hướng dịch chuyển (mặc định false)
    config?: SpringConfig; // Cấu hình animation (react-spring config)
    initialOpacity?: number; // Độ mờ ban đầu (mặc định 0)
    animateOpacity?: boolean; // Có animating opacity không? (mặc định true)
    scale?: number; // Giá trị scale ban đầu (mặc định 1)
    threshold?: number; // Ngưỡng IntersectionObserver (mặc định 0.1)
};

{
    /* <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
        >
            hello
    </AnimatedContent> */
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
    children,
    distance = 100,
    direction = 'vertical',
    reverse = false,
    config = { tension: 50, friction: 80 },
    initialOpacity = 0,
    animateOpacity = true,
    scale = 1,
    threshold = 0.1,
}) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && ref.current) {
                    setInView(true);
                    observer.unobserve(ref.current); // Chỉ quan sát một lần
                }
            },
            { threshold },
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold]);

    const directions: Record<string, string> = {
        vertical: 'Y',
        horizontal: 'X',
    };

    const springProps = useSpring({
        from: {
            transform: `translate${directions[direction]}(${
                reverse ? `-${distance}px` : `${distance}px`
            }) scale(${scale})`,
            opacity: animateOpacity ? initialOpacity : 1,
        },
        to: inView ? { transform: 'translateY(0px) scale(1)', opacity: 1 } : undefined,
        config,
    });

    return (
        <animated.div ref={ref} style={springProps}>
            {children}
        </animated.div>
    );
};

export default AnimatedContent;
