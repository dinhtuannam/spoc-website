'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import AddButton from '@/components/button/add.button';
import EditButton from '@/components/button/edit.button';
import ColumnSelect from '@/components/table/column-select';
import { DataTable } from '@/components/table/data-table';
import useTableRef from '@/hooks/useTableRef';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sản phẩm',
        link: '/admin/san-pham',
    },
    {
        title: 'Thể loại',
        link: '/admin/san-pham/the-loai',
    },
];

function Page() {
    const { tableRef, onFetch } = useTableRef();

    const columns = useMemo<ColumnDef<ProductCategory>[]>(
        () => [
            ColumnSelect<ProductCategory>(),
            {
                accessorKey: 'name',
                header: 'Tên danh mục',
            },
            {
                id: 'actions',
                header: 'Thao tác',
                cell: ({ row }) => {
                    return (
                        <div className="flex space-x-2">
                            <EditButton
                                className="py-1 px-2"
                                icon
                                navigate={`/admin/san-pham/the-loai/cap-nhat/${row.original.id}`}
                            />
                        </div>
                    );
                },
            },
        ],
        [],
    );

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumbs} />
                <AddButton icon>Thêm</AddButton>
            </div>

            <div className="mt-4">
                <DataTable
                    columns={columns}
                    api="/api/ProductCategory/pagination"
                    ref={tableRef}
                    selectKey={'id'}
                    deleteApi="/api/ProductCategory"
                />
            </div>
        </div>
    );
}

export default Page;
