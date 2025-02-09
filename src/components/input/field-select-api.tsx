'use client';

import ErrorLabel from '../label/error.label';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';
import SelectService from '@/services/select.service';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface SelectOption {
    value: string;
    label: string;
}

interface FieldInputProps<TData> {
    value: keyof TData;
    label: keyof TData;
    api: string;
    text?: string;
    error?: boolean;
    msg?: string;
    className?: string;
    loading?: boolean;
    defaultValue?: string | undefined;
    placeholder?: string;
    onChange?(data: string): void;
}

function FieldSelectApi<TData>({
    value,
    label,
    api,
    text,
    error = false,
    msg = '',
    className,
    loading = false,
    defaultValue,
    placeholder = 'Vui lòng chọn...',
    onChange,
}: FieldInputProps<TData>) {
    const { data = [], isLoading: apiLoading } = useQuery<SelectOption[]>({
        queryKey: [api],
        queryFn: () => SelectService.get<TData>(api, value, label),
        staleTime: 10 * 1000,
    });

    return (
        <div className={cn(className)}>
            {text && <Label htmlFor="phone">{text}</Label>}

            {apiLoading || loading ? (
                <Skeleton className="w-full h-8" />
            ) : data.length > 0 ? (
                <Select defaultValue={defaultValue} onValueChange={onChange}>
                    <SelectTrigger className={cn('w-full', error && '!border-red-500')}>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {data.map((item) => (
                                <SelectItem value={item.value} key={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            ) : (
                <p className="text-gray-500 text-sm">Không có dữ liệu</p>
            )}
            <ErrorLabel>{msg}</ErrorLabel>
        </div>
    );
}

export default FieldSelectApi;
