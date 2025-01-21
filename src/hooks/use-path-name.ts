import { headers } from 'next/headers';

export const usePathName = (): string => {
    const headerList = headers();
    const pathname = headerList.get('x-current-path');
    if (pathname === null) {
        console.log('[usePathName] error - null');
        return '';
    }
    return pathname;
};
