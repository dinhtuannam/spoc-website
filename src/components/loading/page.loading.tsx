'use client';

import Image from 'next/image';
import React from 'react';
import { PropagateLoader } from 'react-spinners';

function PageLoading() {
    return (
        <div className="w-full h-fit flex flex-col items-center gap-4 mt-10">
            <div className="relative aspect-[4/3] w-[50%]">
                <Image src={'/images/loading.png'} alt="loading..." fill className="object-cover" />
            </div>
            <PropagateLoader color="#1E4077" />
            <p className="mt-4 tracking-widest text-app-primary-blue font-semibold">Đang tiến hành lấy dữ liệu ...</p>
        </div>
    );
}

export default PageLoading;
