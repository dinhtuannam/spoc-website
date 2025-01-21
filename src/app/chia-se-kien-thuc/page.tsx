import KnowledgeCard from '@/components/card/knowledge.card';
import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: 'Chia sẻ kiến thức - SPOC',
    description: 'Chia sẽ kiến thức cộng đồng',
};

function ChiaSeKienThuc() {
    return (
        <div className="page-container min-h-screen">
            <Image
                src={'/images/banner-cskt.png'}
                alt={`banner`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover' }}
            />
            <div className="grid laptop:grid-cols-4 grid-cols-2 my-8 app-padding">
                {Array.from({ length: 8 }).map((_, index) => (
                    <KnowledgeCard />
                ))}
            </div>
        </div>
    );
}

export default ChiaSeKienThuc;
