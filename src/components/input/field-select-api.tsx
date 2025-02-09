'use client';

import { Label } from '../ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';
import SelectService from '@/services/select.service';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface FieldInputProps {
    text?: string;
    error?: boolean;
    msg?: string;
    className?: string;
    loading?: boolean;
    value?: string | undefined;
    onChange?(data: string): void;
    api: string;
    placeholder?: string;
}

function FieldSelectApi({
    api,
    className,
    text,
    error = false,
    msg = '',
    placeholder = 'Vui lòng chọn...',
    value,
    onChange,
}: FieldInputProps) {
    const { data, isLoading: loading } = useQuery<SelectOption[]>({
        queryKey: [api],
        queryFn: () => SelectService.get<ProductCategory>(api, 'id', 'name'),
        staleTime: 1000 * 10,
    });

    return (
        <div className={cn(className)}>
            {text && <Label htmlFor="phone">{text}</Label>}
            {loading ? (
                <Skeleton className="w-full h-8" />
            ) : (
                <Select defaultValue={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {data?.map((item, index) => {
                                return (
                                    <SelectItem value={item.value} key={index}>
                                        {item.label}
                                    </SelectItem>
                                );
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            )}
            {error && <span className="text-red-500 text-xs mt-[-3px]">{msg}</span>}
        </div>
    );
}

export default FieldSelectApi;
