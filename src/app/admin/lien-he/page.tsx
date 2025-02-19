'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import ColumnSelect from '@/components/table/column-select';
import { DataTable } from '@/components/table/data-table';
import ApiRoute from '@/constants/api-route';
import Formatter from '@/helpers/format.helper';
import useTableRef from '@/hooks/useTableRef';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Liên hệ',
        link: '/admin/lien-he',
    },
];

function Page() {
    const { tableRef } = useTableRef();
    const columns = useMemo<ColumnDef<Contact>[]>(
        () => [
            ColumnSelect<Contact>(),
            {
                accessorKey: 'phone',
                header: 'Số điện thoại',
            },
            {
                accessorKey: 'fullname',
                header: 'Họ tên',
            },
            {
                accessorKey: 'email',
                header: 'Email',
            },
            {
                accessorKey: 'content',
                header: 'Nội dung',
            },
            {
                accessorKey: 'createdDate',
                header: 'Thời gian',
                cell: ({ row }) => {
                    return <span>{Formatter.date(row.original.createdDate)}</span>;
                },
            },
        ],
        [],
    );

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumbs} />
            </div>
            <div className="mt-4">
                <DataTable
                    columns={columns}
                    api={ApiRoute.Contact.pagination}
                    ref={tableRef}
                    selectKey={'id'}
                    deleteApi={ApiRoute.Contact.root}
                />
            </div>
        </div>
    );
}

export default Page;
