import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import './index.css';
import FooterContact from './footer-contact';
import AppConstant from '@/constants/app.constant';
import CacheConst from '@/constants/cache.const';
import ParamConst from '@/constants/param.constant';
import { API_PATH } from '@/lib/axios';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';

const fallback: string[] = ['NHÓM THUỐC NHỎ MẮT', 'NHÓM THUỐC MỠ TRA MẮT', 'NHÓM THUỐC BỔ MẮT - THỰC PHẨM CHỨC NĂNG'];

async function getCategory(): Promise<ProductCategory[] | null> {
    const res = await fetch(
        `${API_PATH}/api/ProductCategory/filter?Skip=0&TotalRecord=3&OrderCol=CreatedDate&OrderDir=desc`,
        {
            next: { revalidate: CacheConst.isr.page },
        },
    );

    if (!res.ok) return null;
    const tmp = await res.json();
    return tmp.data;
}

async function MainFooter() {
    const data = await getCategory();

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
                                    <p className="text-xs mobile:text-sm laptop:text-base">
                                        {AppConstant.phone} - {AppConstant.phone2}
                                    </p>
                                </div>
                                <div className="flex items-center mt-4 gap-2 justify-center desktop:justify-start">
                                    <MapPinIcon className="min-w-[20px]" />
                                    <p className="text-xs mobile:text-sm laptop:text-base text-center laptop:text-left max-w-[70%] laptop:w-full">
                                        {AppConstant.address}
                                    </p>
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
                                    {data
                                        ? data.map((item, idx) => {
                                              return (
                                                  <li>
                                                      <Link
                                                          prefetch
                                                          key={idx}
                                                          href={`/san-pham?${ParamConst.danh_muc}=${item.code}`}
                                                      >
                                                          {item.name}
                                                      </Link>
                                                  </li>
                                              );
                                          })
                                        : fallback.map((item, idx) => {
                                              return (
                                                  <li>
                                                      <Link prefetch href="/san-pham" key={idx}>
                                                          {item}
                                                      </Link>
                                                  </li>
                                              );
                                          })}
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
