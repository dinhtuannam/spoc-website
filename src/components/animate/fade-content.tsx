'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

{
    /* 
    <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
        <CompanyInfo />
    </FadeContent>; 
*/
}

interface FadeContentProps {
    children: ReactNode; // Kiểu dữ liệu của nội dung con (có thể là bất kỳ thành phần React nào)
    blur?: boolean; // Để quyết định có áp dụng hiệu ứng làm mờ hay không
    duration?: number; // Thời gian của hiệu ứng
    easing?: string; // Kiểu easing của hiệu ứng
    threshold?: number; // Ngưỡng để bắt đầu hiệu ứng
    initialOpacity?: number; // Độ mờ ban đầu
}

const FadeContent: React.FC<FadeContentProps> = ({
    children,
    blur = false,
    duration = 1000,
    easing = 'ease-out',
    threshold = 0.1,
    initialOpacity = 0,
}) => {
    const [inView, setInView] = useState<boolean>(false); // Trạng thái có trong vùng nhìn hay không
    const ref = useRef<HTMLDivElement | null>(null); // Sử dụng ref với kiểu div

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && ref.current) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold },
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : initialOpacity,
                transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
                filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
            }}
        >
            {children}
        </div>
    );
};

export default FadeContent;
