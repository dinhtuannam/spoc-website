import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { cn } from '@/lib/utils';
import React from 'react';

interface FieldInputProps extends React.ComponentProps<'input'> {
    label?: string;
    error?: boolean;
    msg?: string;
    className?: string;
}

function FieldInput({ className, label, error = false, msg = '', ...props }: FieldInputProps) {
    return (
        <div className={cn(className)}>
            {label && <Label htmlFor="phone">{label}</Label>}
            <Input className={cn('app-input', error && '!border-red-500')} {...props} />
            {error && <span className="text-red-500 text-xs mt-[-3px]">{msg}</span>}
        </div>
    );
}

export default FieldInput;
