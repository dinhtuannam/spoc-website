import Image from 'next/image';
import React from 'react';

function TinTucBanner() {
    return (
        <Image
            src="/images/banner-tin-tuc.png"
            alt="Tin tức banner"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto max-h-[600px] object-cover"
            priority
        />
    );
}

export default TinTucBanner;
