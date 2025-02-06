'use client';

import { useImagePreview } from '@/contexts/image-preview-context';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

function ImagePreview() {
    const { imageUrl, isImageOpen, closeImage } = useImagePreview();

    useEffect(() => {
        if (isImageOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isImageOpen]);

    if (!isImageOpen || !imageUrl) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/70 animate-in fade-in duration-200" onClick={closeImage}>
            <div className="absolute inset-0 flex items-center justify-center p-4">
                {/* Close Button */}
                <button
                    onClick={closeImage}
                    className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors"
                >
                    <X size={32} strokeWidth={2.5} />
                </button>

                {/* Image Container */}
                <div
                    className="animate-in zoom-in-50 duration-300 max-w-[90vw] max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={imageUrl}
                        alt="Preview"
                        className="object-contain"
                        width={1920}
                        height={1080}
                        priority
                        quality={100}
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            height: 'auto',
                            width: 'auto',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ImagePreview;
