'use client';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface QuantityInputProps {
    initialValue?: number;
    onChange?: (value: number) => void;
}

export function QuantityInput({ initialValue = 1, onChange }: QuantityInputProps) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (newValue: number) => {
        if (newValue >= 1) {
            setValue(newValue);
            onChange?.(newValue);
        }
    };

    return (
        <div className="flex items-center border rounded-md">
            <button
                onClick={() => handleChange(value - 1)}
                className="p-1 hover:bg-gray-100 transition"
                disabled={value <= 1}
            >
                <Minus className="h-4 w-4" />
            </button>
            <input
                type="number"
                value={value}
                onChange={(e) => handleChange(Number(e.target.value))}
                className="w-12 text-center border-x focus:outline-none"
            />
            <button onClick={() => handleChange(value + 1)} className="p-1 hover:bg-gray-100 transition">
                <Plus className="h-4 w-4" />
            </button>
        </div>
    );
}
