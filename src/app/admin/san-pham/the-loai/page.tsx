'use client';

import CategoryAddModal from './_components/add.modal';
import CategoryUpdateModal from './_components/update.modal';
import { Breadcrumb } from '@/components/breadcrumb';
import AddButton from '@/components/button/add.button';
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
    const { modals, openModal, closeModal } = useModal(['update', 'add']);
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
                            <EditButton className="py-1 px-2" icon onClick={() => openModal('update', row.original)} />
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
                <AddButton icon onClick={() => openModal('add')}>
                    Thêm
                </AddButton>
            </div>

            <div className="mt-4">
                <DataTable
                    columns={columns}
                    api={ApiRoute.ProductCategory.pagination}
                    ref={tableRef}
                    selectKey={'id'}
                    deleteApi={ApiRoute.ProductCategory.root}
                />
            </div>
            <CategoryAddModal visible={modals['add'].visible} onFetch={onFetch} closeModal={() => closeModal('add')} />
            <CategoryUpdateModal
                visible={modals['update'].visible}
                onFetch={onFetch}
                closeModal={() => closeModal('update')}
                data={modals['update'].data}
            />
        </div>
    );
}

export default Page;
