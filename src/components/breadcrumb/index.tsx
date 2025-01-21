import {
    Breadcrumb as Container,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { Slash } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type BreadcrumbProps = {
    values: BreadcrumbItem[];
    className?: string;
    container?: string;
};

export function Breadcrumb({ values, className, container }: BreadcrumbProps) {
    return (
        <Container className={cn(container)}>
            <BreadcrumbList className="!gap-0">
                {values.map((item, index) => (
                    <React.Fragment key={item.link}>
                        {index > 0 && (
                            <BreadcrumbSeparator>
                                <h2 className="font-bold px-1 text-xl">/</h2>
                            </BreadcrumbSeparator>
                        )}
                        <BreadcrumbItem>
                            {index === values.length - 1 ? (
                                <BreadcrumbPage className={cn('font-semibold text-lg', className)}>
                                    {item.title}
                                </BreadcrumbPage>
                            ) : (
                                <Link
                                    className={cn('hover:text-black font-semibold transition text-lg', className)}
                                    href={item.link}
                                >
                                    {item.title}
                                </Link>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Container>
    );
}
