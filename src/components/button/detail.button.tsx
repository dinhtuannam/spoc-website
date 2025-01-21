import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';
import React from 'react';

interface DetailButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    hoverContent?: string;
}

const DetailButton: React.FC<DetailButtonProps> = ({ onClick, className, children, hoverContent }) => {
    const button = (
        <Button
            onClick={onClick}
            className={cn('bg-gray-400 hover:opacity-80 text-white flex items-center', className)}
        >
            <InfoIcon className="w-5 h-5" />
            {children}
        </Button>
    );

    return (
        <HoverCard>
            <HoverCardTrigger asChild>{button}</HoverCardTrigger>
            <HoverCardContent className="w-auto font-semibold">{hoverContent || 'Information'}</HoverCardContent>
        </HoverCard>
    );
};

export default DetailButton;
