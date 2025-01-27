'use client';

import { createContext, useContext, useState } from 'react';

interface VideoContextType {
    videoUrl: string | null;
    openVideo: (url: string) => void;
    closeVideo: () => void;
    isVideoOpen: boolean;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export function VideoProvider({ children }: { children: React.ReactNode }) {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const openVideo = (url: string) => {
        setVideoUrl(url);
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
        setVideoUrl(null);
    };

    return (
        <VideoContext.Provider value={{ videoUrl, openVideo, closeVideo, isVideoOpen }}>
            {children}
        </VideoContext.Provider>
    );
}

export function useVideo() {
    const context = useContext(VideoContext);
    if (context === undefined) {
        throw new Error('useVideo must be used within a VideoProvider');
    }
    return context;
}
