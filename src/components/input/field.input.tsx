import ErrorLabel from '../label/error.label';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';
import React from 'react';

interface FieldInputProps extends React.ComponentProps<'input'> {
    label?: string;
    error?: boolean;
    msg?: string;
    className?: string;
    loading?: boolean;
}

function FieldInput({ className, label, error = false, msg = '', loading = false, ...props }: FieldInputProps) {
    return (
        <div className={cn(className)}>
            {label && <Label htmlFor="phone">{label}</Label>}
            {loading ? (
                <Skeleton className="w-full h-8" />
            ) : (
                <Input className={cn('app-input', error && '!border-red-500')} {...props} />
            )}
            <ErrorLabel>{msg}</ErrorLabel>
        </div>
    );
}

export default FieldInput;
