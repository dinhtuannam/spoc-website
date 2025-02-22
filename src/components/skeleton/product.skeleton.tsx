import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import React from 'react';

function ProductSkeleton() {
    return (
        <Card className="overflow-hidden flex flex-col items-center pb-4">
            <div className="relative w-full aspect-square mb-4">
                <Skeleton className="w-full h-full" />
            </div>
            <Skeleton className="w-3/4 h-4 mb-2" />
            <div className="flex gap-1 w-full justify-center">
                <Skeleton className="w-12 h-4" />
                <span className="font-bold">/</span>
                <Skeleton className="w-10 h-4" />
            </div>
        </Card>
    );
}

export default ProductSkeleton;
