'use client';

import React, { useState } from 'react';

function FooterContact() {
    const [input, setInput] = useState<string>('');

    return (
        <div className="absolute top-[-60px] w-full">
            <div className="mx-4 laptop:mx-auto laptop:w-[90%] desktop:w-[80%]">
                <div className="bg-orange-500 text-white rounded-md">
                    <div className="flex flex-col laptop:flex-row items-center justify-between p-4 laptop:py-8 laptop:px-12 desktop:px-14 desktop:py-10">
                        {/* Title Section */}
                        <div className="w-full laptop:w-1/2 mb-4 laptop:mb-0 laptop:pr-10">
                            <h2 className="text-center laptop:text-left font-bold leading-tight">
                                <span className="mobile:text-sm tablet:text-base laptop:text-lg desktop:text-xl ultra:text-2xl">
                                    ĐĂNG KÝ ĐỂ NHẬN NHỮNG THÔNG TIN MỚI NHẤT TỪ CHÚNG TÔI
                                </span>
                            </h2>
                        </div>

                        {/* Input Section */}
                        <div className="w-full laptop:w-1/2">
                            <div className="flex  mx-auto laptop:mx-0">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Nhập số điện thoại"
                                    className="flex-1 rounded-l-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                                />
                                <button className="bg-app-primary-blue text-white px-2 laptop:px-4 py-3 rounded-r-md hover:bg-gray-800 transition-colors whitespace-nowrap">
                                    GỬI NGAY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContact;
