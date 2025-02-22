'use client';

import { Breadcrumb } from '@/components/breadcrumb';
import UploadButton from '@/components/button/upload.button';
import ColumnSelect from '@/components/table/column-select';
import { DataTable } from '@/components/table/data-table';
import ApiRoute from '@/constants/api-route';
import AppConstant from '@/constants/app.constant';
import { useImagePreview } from '@/contexts/image-preview-context';
import Formatter from '@/helpers/format.helper';
import { useToast } from '@/hooks/use-toast';
import useTableRef from '@/hooks/useTableRef';
import { API_PATH } from '@/lib/axios';
import { ColumnDef } from '@tanstack/react-table';
import { PenIcon } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sản phẩm',
        link: '/admin/san-pham',
    },
    {
        title: 'Hình ảnh',
        link: '/admin/san-pham/hinh-anh',
    },
];

function Page() {
    const params = useParams();
    const { id } = params;
    const [loading, setLoading] = useState<boolean>(false);
    const { openImage } = useImagePreview();
    const { tableRef, onFetch } = useTableRef();
    const { toast } = useToast();
    const columns = useMemo<ColumnDef<ProductImage>[]>(
        () => [
            ColumnSelect<ProductImage>(),
            {
                accessorKey: 'id',
                header: 'Hình ảnh',
                cell: ({ row }) => {
                    return (
                        <div className="w-16">
                            <div
                                className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden hover:bg-gray-400`}
                            >
                                <Image
                                    src={row.original.url}
                                    alt={'img'}
                                    fill
                                    className="object-contain transition preview"
                                    onClick={() => openImage(row.original.url)}
                                />
                            </div>
                        </div>
                    );
                },
            },
            {
                accessorKey: 'fileName',
                header: 'Tên file',
            },
            {
                accessorKey: 'createdDate',
                header: 'Ngày tạo',
                cell: ({ row }) => {
                    return <p>{Formatter.date(row.original.createdDate)}</p>;
                },
            },
            {
                id: 'actions',
                header: 'Thao tác',
                cell: ({ row }) => {
                    return (
                        <div className="flex space-x-2 min-w-16">
                            <UploadButton
                                className="!px-2 "
                                onFileSelect={(file: File) => handleEdit(row.original.id, file)}
                            >
                                <PenIcon />
                            </UploadButton>
                        </div>
                    );
                },
            },
        ],
        [],
    );

    const handleEdit = async (imgId: string, file: File) => {
        try {
            setLoading(true);
            toast({
                title: 'Thông báo',
                description: 'Đang tiến hành cập nhật hình ảnh ...',
                duration: 1500,
            });
            const formData = new FormData();
            formData.append('file', file, file.name);

            const response = await fetch(`${API_PATH}${ApiRoute.ProductImage.root}/${imgId}`, {
                method: 'PUT',
                body: formData,
                headers: {
                    //Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData: ApiRes<any> = await response.json();

            if (responseData.succeeded) {
                toast({
                    variant: 'success',
                    title: 'Thông báo',
                    description: 'Cập nhật hình ảnh thành công!',
                    duration: 1500,
                });
                onFetch();
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Lỗi',
                    description: responseData.errorMessage || 'Có lỗi xảy ra khi cập nhật hình ảnh!',
                    duration: 1500,
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                title: 'Lỗi',
                description: 'Có lỗi xảy ra khi cập nhật hình ảnh!',
                duration: 1500,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (files: FileList) => {
        try {
            toast({
                title: 'Thông báo',
                description: 'Đang tiến hành tải hình ảnh ...',
                duration: 1500,
            });
            const formData = new FormData();
            Array.from(files).forEach((file) => {
                formData.append('files', file, file.name);
            });

            const response = await fetch(`${API_PATH}${ApiRoute.ProductImage.root}/${id}`, {
                method: 'POST',
                body: formData,
                headers: {
                    //Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData: ApiRes<any> = await response.json();

            if (responseData.succeeded) {
                toast({
                    variant: 'success',
                    title: 'Thông báo',
                    description: 'Tải lên hình ảnh thành công!',
                    duration: 1500,
                });
                onFetch();
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Lỗi',
                    description: responseData.errorMessage || 'Có lỗi xảy ra khi tải lên hình ảnh!',
                    duration: 1500,
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                title: 'Lỗi',
                description: 'Có lỗi xảy ra khi tải lên hình ảnh!',
                duration: 1500,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-container admin-padding my-8">
            <div className="mb-4 flex justify-between items-center">
                <Breadcrumb values={breadcrumbs} />
                <UploadButton
                    disabled={loading}
                    icon
                    onFileMultiSelect={handleUpload}
                    multiple
                    max={AppConstant.maxImage}
                >
                    Tải lên
                </UploadButton>
            </div>
            <div className="mt-4">
                <DataTable
                    columns={columns}
                    api={`${ApiRoute.ProductImage.root}/${id}/pagination`}
                    ref={tableRef}
                    selectKey={'id'}
                    deleteApi={ApiRoute.ProductImage.root}
                />
            </div>
        </div>
    );
}

export default Page;
