import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import React from 'react';

function NewsSkeleton() {
    return (
        <Card className="overflow-hidden shadow-lg">
            <div className="relative aspect-[4/4]">
                <Skeleton className="w-full h-full" />
            </div>
            <div className="p-4">
                <Skeleton className="h-4 w-1/4 mb-2" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6 mb-1" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        </Card>
    );
}

export default NewsSkeleton;
