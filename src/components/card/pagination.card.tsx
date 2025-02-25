'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ParamConst from '@/constants/param.constant';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useCallback } from 'react';

interface PaginationCardProps {
    data: PaginatedData<any>;
    scrollTo?: string;
    sizes?: number[];
    size?: number;
}

function PaginationCard({ data, scrollTo, size = 10, sizes = [10, 20, 30, 40, 50] }: PaginationCardProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Lấy trang hiện tại từ URL param, mặc định là 1
    const currentPage = useMemo(() => Number(searchParams.get(ParamConst.page)) || 1, [searchParams]);

    // Lấy pageSize từ URL param, mặc định là 10
    const currentPageSize = useMemo(() => Number(searchParams.get(ParamConst.pageSize)) || size, [searchParams]);

    const createQueryString = useCallback(
        (newParams: { [key: string]: string }) => {
            const params = new URLSearchParams(searchParams.toString());
            Object.entries(newParams).forEach(([key, value]) => {
                params.set(key, value);
            });
            return params.toString();
        },
        [searchParams],
    );

    const handlePageChange = useCallback(
        (page: number) => {
            const query = createQueryString({ [ParamConst.page]: page.toString() });
            router.replace(`${pathname}?${query}`, { scroll: false });

            // Cuộn đến vị trí 500px sau khi thay đổi URL
            if (scrollTo) document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        },
        [createQueryString, pathname, router],
    );

    const handlePageSizeChange = useCallback(
        (size: number) => {
            const query = createQueryString({
                [ParamConst.page]: '1',
                [ParamConst.pageSize]: size.toString(),
            });
            router.replace(`${pathname}?${query}`, { scroll: false });

            if (scrollTo) document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        },
        [createQueryString, pathname, router],
    );

    const pages = useMemo(() => {
        const items: number[] = [];
        const maxPages = 3;

        let startPage: number;
        let endPage: number;

        if (data.totalPages <= maxPages) {
            startPage = 1;
            endPage = data.totalPages;
        } else {
            if (currentPage <= 2) {
                startPage = 1;
                endPage = 3;
            } else if (currentPage >= data.totalPages - 1) {
                startPage = data.totalPages - 2;
                endPage = data.totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            items.push(i);
        }

        return items;
    }, [currentPage, data.totalPages]);

    const paginationInfo = useMemo(
        () => ({
            start: data.pageSize * (currentPage - 1) + 1,
            end: Math.min(data.pageSize * currentPage, data.totalRecords),
            total: data.totalRecords,
        }),
        [currentPage, data.pageSize, data.totalRecords],
    );

    const pageButtons = useMemo(
        () =>
            pages.map((page) => (
                <Button
                    key={page}
                    variant={page === currentPage ? 'default' : 'outline'}
                    className="h-8 w-8"
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </Button>
            )),
        [pages, currentPage, handlePageChange],
    );

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                <p className="hidden sm:block">Số bản ghi mỗi trang</p>
                <Select value={String(currentPageSize)} onValueChange={(value) => handlePageSizeChange(Number(value))}>
                    <SelectTrigger className="h-8 w-16">
                        <SelectValue placeholder={currentPageSize} />
                    </SelectTrigger>
                    <SelectContent>
                        {sizes.map((size) => (
                            <SelectItem key={size} value={String(size)}>
                                {size}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <p className="ml-2">
                    <span className="hidden sm:inline">Hiển thị </span>
                    {paginationInfo.start} - {paginationInfo.end} trên {paginationInfo.total}
                </p>
            </div>

            <div className="flex items-center justify-center gap-1 sm:gap-2">
                <span className="text-sm text-gray-500 hidden sm:block">
                    {data.pageIndex}/{data.totalPages} trang
                </span>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >
                    <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="hidden sm:flex gap-1">{pageButtons}</div>

                <div className="flex sm:hidden items-center gap-1">
                    <span className="text-sm">
                        Page {currentPage} of {data.totalPages}
                    </span>
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === data.totalPages}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handlePageChange(data.totalPages)}
                    disabled={currentPage === data.totalPages}
                >
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default PaginationCard;
