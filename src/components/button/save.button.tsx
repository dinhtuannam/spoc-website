import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import React from 'react';

interface SaveButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    hoverContent?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick, className, children, hoverContent }) => {
    const button = (
        <Button onClick={onClick} className={cn('btn-secondary flex items-center', className)}>
            {children}
        </Button>
    );

    return (
        <HoverCard>
            <HoverCardTrigger asChild>{button}</HoverCardTrigger>
            <HoverCardContent className="w-auto font-semibold">{hoverContent || 'Lưu thay đổi'}</HoverCardContent>
        </HoverCard>
    );
};

export default SaveButton;
