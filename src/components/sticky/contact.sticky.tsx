'use client';

import AppConstant from '@/constants/app.constant';
import Image from 'next/image';
import Link from 'next/link';

function StickyContact() {
    const handlePhoneClick = () => {
        window.location.href = `tel:${AppConstant.phone.replace(/\s/g, '')}`;
    };

    return (
        <div className="fixed bottom-4 right-2 tablet:bottom-8 tablet:right-4 laptop:bottom-12 laptop:right-8 z-50 flex flex-col gap-2 tablet:gap-4">
            {/* Phone */}
            <button onClick={handlePhoneClick} className="relative group">
                <div className="absolute -inset-1.5 tablet:-inset-2 bg-white rounded-full blur-sm group-hover:blur opacity-75 transition duration-200" />
                <Image
                    src="/templates/layout/phone.png"
                    alt="Phone"
                    width={60}
                    height={60}
                    className="relative w-[40px] h-[40px] tablet:w-[50px] tablet:h-[50px] laptop:w-[60px] laptop:h-[60px] transform hover:scale-110 transition duration-200"
                    priority
                />
                <div
                    className="absolute right-full top-1/2 -translate-y-1/2 mr-2 tablet:mr-4 px-2 tablet:px-4 py-1 tablet:py-2 bg-white rounded-lg shadow-lg 
                    invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200
                    whitespace-nowrap text-xs tablet:text-sm font-medium"
                >
                    {AppConstant.phone}
                </div>
            </button>

            {/* Zalo */}
            <Link href={AppConstant.zalo} target="_blank" rel="noopener noreferrer" className="relative group">
                <div className="absolute -inset-1.5 tablet:-inset-2 bg-white rounded-full blur-sm group-hover:blur opacity-75 transition duration-200" />
                <Image
                    src="/templates/layout/zalo.png"
                    alt="Zalo"
                    width={60}
                    height={60}
                    className="relative w-[40px] h-[40px] tablet:w-[50px] tablet:h-[50px] laptop:w-[60px] laptop:h-[60px] transform hover:scale-110 transition duration-200"
                    priority
                />
                <div
                    className="absolute right-full top-1/2 -translate-y-1/2 mr-2 tablet:mr-4 px-2 tablet:px-4 py-1 tablet:py-2 bg-white rounded-lg shadow-lg 
                    invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200
                    whitespace-nowrap text-xs tablet:text-sm font-medium"
                >
                    Chat với chúng tôi
                </div>
            </Link>
        </div>
    );
}

export default StickyContact;
