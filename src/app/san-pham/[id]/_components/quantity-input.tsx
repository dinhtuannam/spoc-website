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
        <div className="flex items-center border-2 border-black rounded-full h-10 px-3 bg-white">
            <button
                onClick={() => handleChange(value - 1)}
                className="hover:text-primary transition-colors"
                disabled={value <= 1}
            >
                <Minus className="h-5 w-5" />
            </button>
            <input
                disabled
                type="text"
                value={value}
                onChange={(e) => handleChange(Number(e.target.value))}
                className="w-16 text-center focus:outline-none text-base"
            />
            <button onClick={() => handleChange(value + 1)} className="hover:text-primary transition-colors">
                <Plus className="h-5 w-5" />
            </button>
        </div>
    );
}
