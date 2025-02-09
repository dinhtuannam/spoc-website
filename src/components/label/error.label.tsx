import { cn } from '@/lib/utils';
import React from 'react';

interface ErrorLabelProps {
    children: React.ReactNode;
    className?: string;
}

function ErrorLabel({ children, className }: ErrorLabelProps) {
    return <div className={cn('text-red-500 text-xs mt-[-3px] h-4', className)}>{children}</div>;
}

export default ErrorLabel;
