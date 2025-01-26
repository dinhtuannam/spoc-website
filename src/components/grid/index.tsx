import { cn } from '@/lib/utils';
import React, { memo } from 'react';

interface AppGrid {
    children: React.ReactNode;
    className?: string;
    rows?: 3 | 4;
}

const styleDefine: Record<3 | 4, string> = {
    3: 'grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-6',
    4: 'grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 laptop:gap-6',
};

function AppGrid({ children, className, rows = 4 }: AppGrid) {
    const gridStyle = styleDefine[rows];
    return <div className={cn(gridStyle, className)}>{children}</div>;
}

export default memo(AppGrid);
