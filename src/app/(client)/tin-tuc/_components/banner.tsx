import Image from 'next/image';
import React from 'react';

function TinTucBanner() {
    return (
        <Image
            src="/templates/tin-tuc/banner.jpg"
            alt="Tin tức banner"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover"
            priority
        />
    );
}

export default TinTucBanner;
