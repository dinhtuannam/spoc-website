'use client';

import { useVideo } from '@/contexts/video-context';
import { X } from 'lucide-react';
import { useEffect } from 'react';

function VideoModal() {
    const { videoUrl, isVideoOpen, closeVideo } = useVideo();

    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVideoOpen]);

    if (!isVideoOpen || !videoUrl) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black animate-in fade-in duration-200" onClick={closeVideo}>
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Close Button */}
                <button
                    onClick={closeVideo}
                    className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors"
                >
                    <X size={32} strokeWidth={2.5} />
                </button>

                {/* Video Container */}
                <div
                    className="w-[90vw] max-w-[375px] mx-auto animate-in zoom-in-50 duration-300"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative w-full aspect-[9/16] bg-black">
                        <blockquote
                            className="tiktok-embed absolute inset-0 w-full h-full"
                            style={{ backgroundColor: '#000000', margin: 0 }}
                        >
                            <iframe
                                src={videoUrl}
                                className="absolute inset-0 w-full h-full"
                                style={{ backgroundColor: '#000000' }}
                                frameBorder="0"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            />
                        </blockquote>
                        <script async src="https://www.tiktok.com/embed.js"></script>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoModal;
