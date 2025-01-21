import Image from 'next/image';
import React from 'react';

function KnowledgeCard() {
    return (
        <div className="mb-8">
            <Image
                src={'/images/knowledge.png'}
                width={264}
                height={196}
                alt="Tập thể dục 10 phút mỗi ngày có lợi ích gì"
                sizes="100vw"
                className="desktop:max-w-[276px] desktop:max-h-[368px] mx-auto img-hover-scale"
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}

export default KnowledgeCard;
