'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductImagesProps {
    images: string[];
}

export function ProductImages({ images }: ProductImagesProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="w-full flex mobile:flex-col laptop:flex-row gap-4">
            {/* Thumbnail Images */}
            <div className="mobile:order-2 laptop:order-1 laptop:w-24">
                <div className="mobile:grid mobile:grid-cols-4 laptop:flex laptop:flex-col gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative aspect-square cursor-pointer border-2 rounded-lg overflow-hidden
                                ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-contain p-1" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Image */}
            <div className="mobile:order-1 laptop:order-2 laptop:flex-1">
                <div className="relative aspect-square w-full">
                    <Image src={images[selectedImage]} alt="Product" fill className="object-contain" priority />

                    {/* Navigation Arrows - Only on mobile */}
                    <div className="absolute inset-0 flex items-center justify-between laptop:hidden">
                        <button
                            onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                            className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                            className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
