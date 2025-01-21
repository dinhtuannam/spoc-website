import React from 'react';

function SectionHeader() {
    return (
        <div className="app-padding">
            <div className="px-2 flex justify-between">
                <h1 className="text-3xl font-semibold text-app-primary-blue uppercase">Tin tức</h1>
                <h2 className="text-xl text-app-primary uppercase hover:text-app-primary-hover transition cursor-pointer font-semibold underline">
                    Khám phá thêm
                </h2>
            </div>
        </div>
    );
}

export default SectionHeader;
