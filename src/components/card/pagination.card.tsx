'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface PaginationCardProps {
    data: PaginatedData<any>;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
}

const pageSizes = [10, 20, 30, 40, 50];

function PaginationCard({ data, onPageChange, onPageSizeChange }: PaginationCardProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Lấy trang hiện tại từ URL param, mặc định là 1
    const currentPage = Number(searchParams.get('trang')) || 1;

    const createQueryString = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('trang', page.toString());
        return params.toString();
    };

    const handlePageChange = (page: number) => {
        // Cập nhật URL
        const query = createQueryString(page);
        router.push(`${pathname}?${query}`);
        // Callback để component cha xử lý
        onPageChange(page);
    };

    const pages = useMemo(() => {
        const items: number[] = [];
        const maxPages = 3; // Giảm xuống 3 trang

        let startPage: number;
        let endPage: number;

        if (data.totalPages <= maxPages) {
            // Nếu tổng số trang ít hơn hoặc bằng 3, hiện tất cả
            startPage = 1;
            endPage = data.totalPages;
        } else {
            // Xử lý khi có nhiều hơn 3 trang
            if (currentPage <= 2) {
                // Đang ở đầu
                startPage = 1;
                endPage = 3;
            } else if (currentPage >= data.totalPages - 1) {
                // Đang ở cuối
                startPage = data.totalPages - 2;
                endPage = data.totalPages;
            } else {
                // Đang ở giữa
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            items.push(i);
        }

        return items;
    }, [currentPage, data.totalPages]);

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                <p className="hidden sm:block">Số bản ghi mỗi trang</p>
                <Select value={String(data.pageSize)} onValueChange={(value) => onPageSizeChange(Number(value))}>
                    <SelectTrigger className="h-8 w-16">
                        <SelectValue placeholder={data.pageSize} />
                    </SelectTrigger>
                    <SelectContent>
                        {pageSizes.map((size) => (
                            <SelectItem key={size} value={String(size)}>
                                {size}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <p className="ml-2">
                    <span className="hidden sm:inline">Hiển thị </span>
                    {data.pageSize * (currentPage - 1) + 1} - {Math.min(data.pageSize * currentPage, data.totalRecords)}{' '}
                    trên {data.totalRecords}
                </p>
            </div>

            <div className="flex items-center justify-center gap-1 sm:gap-2">
                {/* Total Pages Indicator */}
                <span className="text-sm text-gray-500 hidden sm:block">{data.totalPages} trang</span>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handlePageChange(1)}
                    disabled={!data.hasPreviousPage}
                >
                    <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!data.hasPreviousPage}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Page Numbers */}
                <div className="hidden sm:flex gap-1">
                    {pages.map((page) => (
                        <Button
                            key={page}
                            variant={page === currentPage ? 'default' : 'outline'}
                            className="h-8 w-8"
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </Button>
                    ))}
                </div>

                {/* Mobile Current Page */}
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
                    disabled={!data.hasNextPage}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handlePageChange(data.totalPages)}
                    disabled={!data.hasNextPage}
                >
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default PaginationCard;
