import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { cn } from '@/lib/utils';
import React from 'react';

interface LineClamp {
    className: string;
    children: React.ReactNode;
}

function LineClamp({ className, children }: LineClamp) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className={cn(className, 'cursor-default')}>{children}</div>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto tracking-wider max-w-[600px]">{children}</HoverCardContent>
        </HoverCard>
    );
}

export default LineClamp;
