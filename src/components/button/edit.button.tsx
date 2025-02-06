import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { PencilIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface EditButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    hoverContent?: string;
    navigate?: string;
    icon?: boolean;
}

const EditButton: React.FC<EditButtonProps> = ({
    onClick,
    className,
    navigate,
    children,
    hoverContent,
    icon = false,
}) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) onClick();
        if (navigate) router.push(navigate);
    };

    const button = (
        <Button variant={'outline'} onClick={handleClick} className={cn('btn-primary flex items-center', className)}>
            {icon && <PencilIcon className="w-5 h-5" />}
            {children}
        </Button>
    );

    return (
        <HoverCard>
            <HoverCardTrigger asChild>{button}</HoverCardTrigger>
            <HoverCardContent className="w-auto font-semibold">{hoverContent || 'Chỉnh sửa'}</HoverCardContent>
        </HoverCard>
    );
};

export default EditButton;
