import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface AddButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    hoverContent?: string;
    navigate?: string;
    icon?: boolean;
}

const AddButton: React.FC<AddButtonProps> = ({
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
        <Button
            onClick={handleClick}
            className={cn('bg-green-500 hover:bg-green-600 text-white flex items-center', className)}
        >
            {icon && <PlusIcon className="w-5 h-5" />}
            {children}
        </Button>
    );

    return (
        <HoverCard>
            <HoverCardTrigger asChild>{button}</HoverCardTrigger>
            <HoverCardContent className="w-auto font-semibold">{hoverContent || 'Thêm mới'}</HoverCardContent>
        </HoverCard>
    );
};

export default AddButton;
