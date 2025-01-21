import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { PencilIcon } from 'lucide-react';
import React from 'react';

interface EditButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    hoverContent?: string;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick, className, children, hoverContent }) => {
    const button = (
        <Button
            onClick={onClick}
            className={cn('bg-blue-400 hover:bg-blue-500 text-white flex items-center', className)}
        >
            <PencilIcon className="w-5 h-5" />
            {children}
        </Button>
    );

    return (
        <HoverCard>
            <HoverCardTrigger asChild>{button}</HoverCardTrigger>
            <HoverCardContent className="w-auto font-semibold">{hoverContent || 'Edit'}</HoverCardContent>
        </HoverCard>
    );
};

export default EditButton;
