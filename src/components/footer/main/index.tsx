import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import './index.css';
import FooterContact from './footer-contact';
import { Separator } from '@radix-ui/react-separator';

// Thêm revalidate cho ISR
export const revalidate = 6200; // Revalidate mỗi 1 giờ

async function MainFooter() {
    // Có thể fetch data ở đây nếu cần
    return (
        <div className="flex flex-col items-center page-container relative mt-36">
            <FooterContact />

            <div className="w-full bg-app-primary-blue text-white py-8 app-padding pt-28">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col laptop:flex-row laptop:justify-between laptop:gap-16">
                        <div className="flex items-start justify-center mb-8 laptop:mb-0">
                            <Image
                                src="/images/logo-blur.png"
                                alt="spoc-logo"
                                width={180}
                                height={117}
                                quality={100}
                                className="h-auto laptop:m-0"
                            />
                        </div>
                        <div className="mb-8 laptop:mb-0 laptop:max-w-[300px]">
                            <h3 className="footer__content-title text-center laptop:text-left">Thông tin liên lạc</h3>
                            <div className="flex items-center mt-4 gap-2 justify-center laptop:justify-start">
                                <MailIcon className="min-w-[20px]" />
                                <p className="text-xs mobile:text-sm laptop:text-base">spoc@gmail.vn</p>
                            </div>
                            <div className="flex items-center mt-4 gap-2 justify-center laptop:justify-start">
                                <PhoneIcon className="min-w-[20px]" />
                                <p className="text-xs mobile:text-sm laptop:text-base">0123 123 123</p>
                            </div>
                            <div className="flex items-center mt-4 gap-2 justify-center laptop:justify-start">
                                <MapPinIcon className="min-w-[20px]" />
                                <p className="text-xs mobile:text-sm laptop:text-base">
                                    123 Trần Hưng Đạo, P.12, Q.5, TP.HCM
                                </p>
                            </div>
                        </div>

                        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 gap-2 laptop:gap-0 flex-1">
                            <div className="footer__content_item">
                                <h3 className="footer__content-title">Về chúng tôi</h3>
                                <ul className="footer__content-list">
                                    <li>Giới thiệu</li>
                                    <li>Đội ngũ chuyên gia</li>
                                    <li>Tin tức</li>
                                    <li>Liên hệ</li>
                                </ul>
                            </div>

                            <div className="footer__content_item">
                                <h3 className="footer__content-title">Sản phẩm</h3>
                                <ul className="footer__content-list">
                                    <li>Về sản phẩm</li>
                                    <li>Về nguyên liệu</li>
                                    <li>Đồng phục doanh nghiệp</li>
                                    <li>Tự thiết kế đồng phục</li>
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
                            Copyright © 2025. SPOC
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFooter;
