import Link from 'next/link';
import React from 'react';

function SectionHeader() {
    return (
        <div className="app-padding">
            <div className="px-2 flex justify-between items-center">
                <h1 className="text-xl tablet:text-2xl laptop:text-3xl font-semibold text-app-primary-blue uppercase">
                    Tin tức
                </h1>
                <Link href={'/tin-tuc'}>
                    <h2 className="text-base tablet:text-lg laptop:text-xl text-app-primary uppercase hover:text-app-primary-hover transition cursor-pointer font-semibold underline">
                        Khám phá thêm
                    </h2>
                </Link>
            </div>
        </div>
    );
}

export default SectionHeader;
