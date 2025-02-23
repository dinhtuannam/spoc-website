'use client';

import PaginationCard from '@/components/card/pagination.card';
import { useState } from 'react';

function Dev() {
    // Mock data
    const mockData: PaginatedData<any> = {
        items: Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })),
        pageIndex: 1,
        pageSize: 10,
        totalPages: 10,
        totalRecords: 100,
        hasPreviousPage: false,
        hasNextPage: true,
    };

    const [currentData, _] = useState(mockData);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Pagination Test Page</h1>
            <div className="border rounded-lg p-4 mb-4">
                <pre className="text-sm">
                    {JSON.stringify(
                        {
                            pageIndex: currentData.pageIndex,
                            pageSize: currentData.pageSize,
                            totalPages: currentData.totalPages,
                            totalRecords: currentData.totalRecords,
                        },
                        null,
                        2,
                    )}
                </pre>
            </div>
            <PaginationCard data={currentData} />
        </div>
    );
}

export default Dev;
