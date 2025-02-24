'use client';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { Fragment } from 'react';

interface AppButtonProps {
    children: React.ReactNode;
    className?: string;
    radius?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
    link?: string;
    variant?: 'default' | 'outline';
}

function AppButton({
    children,
    className,
    onClick,
    disabled = false,
    variant = 'default',
    radius = true,
    href,
    link,
}: AppButtonProps) {
    const handleClick = () => {
        if (href) {
            window.open(href, '_blank');
        }
        onClick?.();
    };

    const button = (
        <Button
            disabled={disabled}
            onClick={handleClick}
            className={cn(
                // Base styles
                'transition-colors duration-200',
                // Text size responsive
                'mobile:text-sm tablet:text-base laptop:text-lg desktop:text-xl ultra:text-2xl',
                // Padding responsive
                'mobile:px-3 mobile:py-2',
                'tablet:px-4 tablet:py-2',
                'laptop:px-5 laptop:py-2.5',
                'desktop:px-6 desktop:py-2.5',
                'ultra:px-8 ultra:py-3',
                // Height responsive
                'mobile:h-10 tablet:h-11 laptop:h-12 desktop:h-12 ultra:h-13',
                // Variant styles
                variant === 'default' && [
                    'bg-app-primary text-white',
                    'hover:bg-app-primary-hover',
                    'active:bg-app-primary-hover/90',
                    'disabled:bg-gray-300 disabled:cursor-not-allowed',
                ],
                variant === 'outline' && [
                    'border-2 border-app-primary text-app-primary bg-transparent',
                    'hover:bg-app-primary hover:text-white',
                    'active:bg-app-primary/90',
                    'disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed',
                ],
                // Custom className from props
                className,
                radius ? '!rounded-app-radius' : '',
            )}
        >
            {children}
        </Button>
    );

    // Nếu có `link`, bọc bằng `<Link>`
    return link ? (
        <Link href={link} prefetch>
            {button}
        </Link>
    ) : (
        <Fragment>{button}</Fragment>
    );
}

export default AppButton;
