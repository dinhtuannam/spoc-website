import dynamic from 'next/dynamic';
import React from 'react';

const Map = dynamic(() => import('@/components/map'), {
    ssr: false,
});

function CompanyInfo() {
    return (
        <div className="app-padding grid grid-cols-1 laptop:grid-cols-10 gap-2 my-8">
            {/* Contact Information */}
            <div className="laptop:col-span-4 flex items-center">
                <div className="laptop:pr-10 laptop:max-w-[90%]">
                    <h1 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold text-app-primary-blue mb-2">
                        Công ty cổ phần SOPC
                    </h1>
                    <p className="text-gray-800 mb-3 text-base tracking-wider">
                        Liên hệ qua địa chỉ hoặc trực tiếp bằng số điện thoại dưới đây
                    </p>
                    <div className="font-semibold mb-2 text-lg tracking-wider">
                        <strong className=" mr-2">Địa chỉ:</strong>
                        <span className="text-app-primary">
                            176 Hồng Bàng, Phường 12, Quận 5, Thành Phố Hồ Chí Minh
                        </span>
                    </div>
                    <div className="font-semibold mb-2 text-lg tracking-wider">
                        <strong className=" mr-2">Hotline:</strong>
                        <span className="text-app-primary">0931 234 234</span>
                    </div>
                    <div className="font-semibold text-lg tracking-wider">
                        <strong className=" mr-2">Email:</strong>
                        <span className="text-app-primary">sopc@com.vn</span>
                    </div>
                </div>
            </div>

            {/* Map Container */}
            <div className="laptop:col-span-6 w-full h-[400px] tablet:h-[500px] laptop:h-[400px] rounded-app-radius overflow-hidden shadow-lg">
                <Map />
            </div>
        </div>
    );
}

export default CompanyInfo;
