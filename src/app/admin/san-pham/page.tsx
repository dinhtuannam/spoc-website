'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import AddButton from '@/components/button/add.button';
import DetailButton from '@/components/button/detail.button';
import EditButton from '@/components/button/edit.button';
import FieldSelectApi from '@/components/input/field-select-api';
import LineClamp from '@/components/label/line-clamp';
import ColumnSelect from '@/components/table/column-select';
import { DataTable } from '@/components/table/data-table';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ApiRoute from '@/constants/api-route';
import AppConstant from '@/constants/app.constant';
import { useImagePreview } from '@/contexts/image-preview-context';
import { highlightOption } from '@/datas/highlight.data';
import useTableRef from '@/hooks/useTableRef';
import { ColumnDef } from '@tanstack/react-table';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { Fragment, useMemo, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sản phẩm',
        link: '/admin/san-pham',
    },
];

function Page() {
    const [option, setOption] = useState<SelectOption[]>(highlightOption);
    const { openImage } = useImagePreview();
    const { tableRef } = useTableRef();
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
                    const url = row.original.image ? row.original.image : AppConstant.fallback;
                    return (
                        <div className="w-16">
                            <div
                                className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden hover:bg-gray-200`}
                            >
                                <Image
                                    src={url}
                                    alt={'img'}
                                    fill
                                    className="object-contain transition preview"
                                    onClick={() => openImage(url)}
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
            <Fragment>
                <FieldSelectApi<ProductCategory>
                    api={ApiRoute.ProductCategory.root}
                    className="w-[200px]"
                    value="id"
                    label="name"
                    placeholder="Danh mục sản phẩm"
                    validate={false}
                    required={false}
                />
                <FieldSelectApi<SelectOption>
                    api={ApiRoute.Option.highlight}
                    className="w-[160px]"
                    value="value"
                    label="label"
                    placeholder="Sản phẩm nổi bật"
                    validate={false}
                />
            </Fragment>
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
