'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import AddButton from '@/components/button/add.button';
import DetailButton from '@/components/button/detail.button';
import EditButton from '@/components/button/edit.button';
import FieldSelectApi from '@/components/input/field-select-api';
import LineClamp from '@/components/label/line-clamp';
import ColumnSelect from '@/components/table/column-select';
import { DataTable } from '@/components/table/data-table';
import ApiRoute from '@/constants/api-route';
import { useImagePreview } from '@/contexts/image-preview-context';
import useTableRef from '@/hooks/useTableRef';
import { ColumnDef } from '@tanstack/react-table';
import { ImageIcon } from 'lucide-react';
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
                accessorKey: 'highlight',
                header: 'Nổi bật',
                cell: ({ row }) => {
                    const url = row.original.highlight ? '/icons/star-fill.svg' : '/icons/star.svg';
                    return (
                        <div className="w-12">
                            <Image
                                src={url}
                                alt={'img'}
                                width={24}
                                height={24}
                                className="hover:scale-110 transition cursor-pointer ml-2"
                            />
                        </div>
                    );
                },
            },
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
                            <DetailButton
                                className="!px-2"
                                hoverContent="Hình ảnh"
                                navigate={`/admin/san-pham/${row.original.id}/hinh-anh`}
                            >
                                <ImageIcon className="w-5 h-5" />
                            </DetailButton>
                            <EditButton
                                className="py-1 px-2"
                                icon
                                navigate={`/admin/san-pham/${row.original.id}/cap-nhat`}
                            />
                        </div>
                    );
                },
            },
        ],
        [],
    );

    const filter = () => {
        return (
            <div>
                <FieldSelectApi<ProductCategory>
                    api={ApiRoute.ProductCategory.root}
                    className="min-w-[150px]"
                    value="id"
                    label="name"
                    placeholder="Chọn danh mục sản phẩm..."
                    validate={false}
                    required={false}
                />
            </div>
        );
    };

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4 flex items-center justify-between">
                <Breadcrumb values={breadcrumbs} />
                <AddButton icon navigate="/admin/san-pham/them-moi">
                    Thêm
                </AddButton>
            </div>
            <div className="mt-4">
                <DataTable
                    columns={columns}
                    api={ApiRoute.Product.pagination}
                    ref={tableRef}
                    selectKey={'id'}
                    deleteApi={ApiRoute.Product.root}
                    filter={filter()}
                />
            </div>
        </div>
    );
}

export default Page;
