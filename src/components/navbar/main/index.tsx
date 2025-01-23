import NavMenu from './nav-menu';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Thêm cache cho SSG
export const dynamic = 'force-static';

function MainNavbar() {
    return (
        <div className="shadow-bottom w-full navbar-sticky">
            <div className="page-container app-padding flex justify-between items-center h-[73px]">
                <Link href={'/'}>
                    <Image
                        src={'/images/logo.png'}
                        alt="spoc logo"
                        className="cursor-pointer hover:scale-105"
                        width={140}
                        height={32}
                        style={{ height: 'auto' }}
                        priority
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <NavMenu />
                    <div className="cursor-pointer transition flex items-center bg-app-primary py-1 px-3 text-white rounded-app-radius hover:bg-app-primary-hover">
                        <div className="mr-2">
                            <Phone className="" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xs">TƯ VẤN NGAY</h3>
                            <h1 className="text-sm font-semibold">0931 234 234</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainNavbar;
