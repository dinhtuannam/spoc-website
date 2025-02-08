import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface DetailButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    hoverContent?: string;
    navigate?: string;
    icon?: boolean;
}

const DetailButton: React.FC<DetailButtonProps> = ({
    onClick,
    navigate,
    className,
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
        <Button onClick={handleClick} className={cn('btn-info flex items-center', className)}>
            {icon && <Eye className="w-5 h-5" />}
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
