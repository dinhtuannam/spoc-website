'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import AddButton from '@/components/button/add.button';
import DetailButton from '@/components/button/detail.button';
import EditButton from '@/components/button/edit.button';
import ColumnSelect from '@/components/table/column-select';
import { DataTable } from '@/components/table/data-table';
import ApiRoute from '@/constants/api-route';
import useModal from '@/hooks/useModal';
import useTableRef from '@/hooks/useTableRef';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tin tức',
        link: '/admin/tin-tuc',
    },
];

function Page() {
    const { tableRef } = useTableRef();
    const columns = useMemo<ColumnDef<News>[]>(
        () => [
            ColumnSelect<News>(),
            {
                accessorKey: 'title',
                header: 'Tiêu đề',
            },
            {
                accessorKey: 'category.name',
                header: 'Danh mục',
            },
            {
                id: 'actions',
                header: 'Thao tác',
                cell: ({ row }) => {
                    return (
                        <div className="flex space-x-2">
                            <DetailButton className="py-1 px-2" />
                            <EditButton className="py-1 px-2" icon />
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
                    api={ApiRoute.News.pagination}
                    ref={tableRef}
                    selectKey={'id'}
                    deleteApi={ApiRoute.News.root}
                />
            </div>
        </div>
    );
}

export default Page;
