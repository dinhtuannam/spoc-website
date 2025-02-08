import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { Eye, InfoIcon } from 'lucide-react';
import React from 'react';

interface DetailButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    hoverContent?: string;
}

const DetailButton: React.FC<DetailButtonProps> = ({ onClick, className, children, hoverContent }) => {
    const button = (
        <Button onClick={onClick} className={cn('btn-info flex items-center', className)}>
            <Eye className="w-5 h-5" />
            {children}
        </Button>
    );

    return (
        <HoverCard>
            <HoverCardTrigger asChild>{button}</HoverCardTrigger>
            <HoverCardContent className="w-auto font-semibold">{hoverContent || 'Xem chi tiết'}</HoverCardContent>
        </HoverCard>
    );
};

export default DetailButton;
