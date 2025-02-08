'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import EditButton from '@/components/button/edit.button';
import UploadCard from '@/components/card/upload.card';
import LineClamp from '@/components/label/line-clamp';
import ColumnSelect from '@/components/table/column-select';
import { DataTable } from '@/components/table/data-table';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Textarea } from '@/components/ui/textarea';
import ApiRoute from '@/constants/api-route';
import { useImagePreview } from '@/contexts/image-preview-context';
import useTableRef from '@/hooks/useTableRef';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { useMemo } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sản phẩm',
        link: '/admin/san-pham',
    },
];

function Page() {
    const { openImage } = useImagePreview();
    const { tableRef, onFetch } = useTableRef();
    const columns = useMemo<ColumnDef<Product>[]>(
        () => [
            ColumnSelect<Product>(),
            {
                accessorKey: 'id',
                header: 'Hình ảnh',
                cell: ({ row }) => {
                    return (
                        <div className="w-16">
                            <div
                                className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden hover:bg-black`}
                            >
                                <Image
                                    src={'/images/product.png'}
                                    alt={'img'}
                                    fill
                                    className="object-contain transition preview"
                                    onClick={() => openImage('/images/product.png')}
                                />
                            </div>
                        </div>
                    );
                },
            },
            {
                accessorKey: 'name',
                header: 'Tên sản phẩm',
                cell: ({ row }) => {
                    return <LineClamp className="min-w-32 max-w-56 line-clamp-2">{row.original.name}</LineClamp>;
                },
            },
            {
                accessorKey: 'category.name',
                header: 'Danh mục',
                cell: ({ row }) => {
                    return <LineClamp className="max-w-48 line-clamp-2">{row.original.category?.name}</LineClamp>;
                },
            },
            {
                accessorKey: 'introduction',
                header: 'Giới thiệu',
                cell: ({ row }) => {
                    return (
                        <LineClamp className="max-w-48 line-clamp-1">
                            <div dangerouslySetInnerHTML={{ __html: row.original.introduction }} />
                        </LineClamp>
                    );
                },
            },
            {
                accessorKey: 'description',
                header: 'Mô tả',
                cell: ({ row }) => {
                    return (
                        <LineClamp className="max-w-48 line-clamp-1">
                            <div dangerouslySetInnerHTML={{ __html: row.original.description }} />
                        </LineClamp>
                    );
                },
            },
            {
                accessorKey: 'instruction',
                header: 'HDSD',
                cell: ({ row }) => {
                    return (
                        <LineClamp className="max-w-48 line-clamp-1">
                            <div dangerouslySetInnerHTML={{ __html: row.original.instruction }} />
                        </LineClamp>
                    );
                },
            },
            {
                id: 'actions',
                header: 'Thao tác',
                cell: ({ row }) => {
                    return (
                        <div className="flex space-x-2 min-w-16">
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
            <div className="mb-4">
                <Breadcrumb values={breadcrumbs} />
            </div>
            <div className="mt-4">
                <DataTable
                    columns={columns}
                    api={ApiRoute.Product.pagination}
                    ref={tableRef}
                    selectKey={'id'}
                    deleteApi={ApiRoute.Product.root}
                />
            </div>
        </div>
    );
}

export default Page;
