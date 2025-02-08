import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React from 'react';

interface LoadingButtonProps extends ButtonProps {
    type?: 'submit' | 'button';
    isLoading?: boolean;
    loadingText?: string;
    variant?: 'default' | 'outline' | 'ghost' | 'link';
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
    type = 'button',
    variant = 'default',
    children,
    isLoading = false,
    loadingText = 'Đang lưu thay đổi...',
    disabled,
    ...props
}) => {
    return (
        <Button disabled={disabled || isLoading} type={type} {...props} variant={variant}>
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {loadingText}
                </>
            ) : (
                children
            )}
        </Button>
    );
};

export default LoadingButton;
