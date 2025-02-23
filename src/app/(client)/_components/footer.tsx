import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import './index.css';
import FooterContact from './footer-contact';
import AppConstant from '@/constants/app.constant';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';

// Thêm revalidate cho ISR
export const revalidate = 6200; // Revalidate mỗi 1 giờ

async function MainFooter() {
    // Có thể fetch data ở đây nếu cần
    return (
        <div className="flex flex-col items-center page-container relative mt-36">
            <FooterContact />

            <div className="w-full bg-app-primary-blue text-white py-8 app-padding pt-28">
                <div className="">
                    <div className="flex flex-col desktop:flex-row desktop:justify-between desktop:gap-16">
                        <div className="flex items-start justify-center mb-8 desktop:mb-0">
                            <Image
                                src="/images/logo-blur.png"
                                alt="spoc-logo"
                                width={180}
                                height={117}
                                quality={100}
                                className="h-auto laptop:m-0"
                            />
                        </div>

                        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-2 desktop:gap-10 flex-1">
                            <div className="mb-8 laptop:mb-">
                                <h3 className="footer__content-title text-center desktop:text-left">
                                    Thông tin liên lạc
                                </h3>
                                <div className="flex items-center mt-4 gap-2 justify-center desktop:justify-start">
                                    <MailIcon className="min-w-[20px]" />
                                    <p className="text-xs mobile:text-sm laptop:text-base">{AppConstant.mail}</p>
                                </div>
                                <div className="flex items-center mt-4 gap-2 justify-center desktop:justify-start">
                                    <PhoneIcon className="min-w-[20px]" />
                                    <p className="text-xs mobile:text-sm laptop:text-base">{AppConstant.phone}</p>
                                </div>
                                <div className="flex items-center mt-4 gap-2 justify-center desktop:justify-start">
                                    <MapPinIcon className="min-w-[20px]" />
                                    <p className="text-xs mobile:text-sm laptop:text-base">{AppConstant.address}</p>
                                </div>
                            </div>
                            <div className="footer__content_item">
                                <h3 className="footer__content-title">Về chúng tôi</h3>
                                <ul className="footer__content-list">
                                    <li>
                                        <Link href="/gioi-thieu">Giới thiệu</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Đội ngũ chuyên gia</Link>
                                    </li>
                                    <li>
                                        <Link href="/tin-tuc">Tin tức</Link>
                                    </li>
                                    <li>
                                        <Link href="/lien-he">Liên hệ</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__content_item">
                                <h3 className="footer__content-title">Sản phẩm</h3>
                                <ul className="footer__content-list">
                                    <li>
                                        <Link href="/san-pham">Về sản phẩm</Link>
                                    </li>
                                    <li>
                                        <Link href="/san-pham">Về nguyên liệu</Link>
                                    </li>
                                    <li>
                                        <Link href="/lien-he">Đồng phục doanh nghiệp</Link>
                                    </li>
                                    <li>
                                        <Link href="/lien-he">Tự thiết kế đồng phục</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* abc */}
                    <Separator className="h-[1px] w-full bg-gray-50 mt-6" />
                    <div className=" flex flex-col tablet:flex-row justify-between items-center border-t border-gray-700 pt-8">
                        <div className="flex justify-center tablet:justify-start space-x-4">
                            <Image src="/icons/tiktok.svg" alt="tiktok" width={20} height={20} />
                            <Image src="/icons/facebook.svg" alt="facebook" width={20} height={20} />
                            <Image src="/icons/youtube.svg" alt="youtube" width={20} height={20} />
                        </div>
                        <p className="text-xs mobile:text-sm laptop:text-base mt-4 tablet:mt-0">
                            Copyright © 2025. SOPC
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFooter;
