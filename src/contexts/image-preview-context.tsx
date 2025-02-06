'use client';

import { createContext, useContext, useState } from 'react';

interface ImagePreviewContextType {
    imageUrl: string | null;
    openImage: (url: string) => void;
    closeImage: () => void;
    isImageOpen: boolean;
}

const ImagePreviewContext = createContext<ImagePreviewContextType | undefined>(undefined);

export function ImagePreviewProvider({ children }: { children: React.ReactNode }) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const openImage = (url: string) => {
        setImageUrl(url);
        setIsImageOpen(true);
    };

    const closeImage = () => {
        setIsImageOpen(false);
        setImageUrl(null);
    };

    return (
        <ImagePreviewContext.Provider value={{ imageUrl, openImage, closeImage, isImageOpen }}>
            {children}
        </ImagePreviewContext.Provider>
    );
}

export function useImagePreview() {
    const context = useContext(ImagePreviewContext);
    if (context === undefined) {
        throw new Error('useImagePreview must be used within a ImagePreviewProvider');
    }
    return context;
}
