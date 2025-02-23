import ApiRoute from '@/constants/api-route';
import { API } from '@/lib/axios';

interface SearchParams {
    pageIndex: number;
    pageSize: number;
    category?: string;
    textSearch?: string;
    orderCol?: string;
    orderDir?: string;
}

export default class NewsService {
    static async search(params: SearchParams): Promise<PaginatedData<NewsOverview>> {
        try {
            // Tạo searchParams từ object params
            const searchParams = new URLSearchParams();

            // Thêm các params bắt buộc
            searchParams.append('PageIndex', params.pageIndex.toString());
            searchParams.append('PageSize', params.pageSize.toString());

            // Thêm các params optional nếu có
            if (params.category) searchParams.append('Category', params.category);
            if (params.textSearch) searchParams.append('TextSearch', params.textSearch);
            if (params.orderCol) searchParams.append('OrderCol', params.orderCol);
            if (params.orderDir) searchParams.append('OrderDir', params.orderDir);

            const res = await API.get<ApiRes<PaginatedData<NewsOverview>>>(
                `${ApiRoute.News.search}?${searchParams.toString()}`,
            );

            // Nếu API trả về thành công và có data
            if (res.data.succeeded && res.data.data) {
                return res.data.data;
            }

            // Nếu API thất bại hoặc không có data, trả về empty paginated data
            return {
                items: [],
                pageIndex: params.pageIndex,
                pageSize: params.pageSize,
                totalPages: 0,
                totalRecords: 0,
                hasPreviousPage: false,
                hasNextPage: false,
            };
        } catch (error) {
            console.error('Lỗi khi tìm kiếm sản phẩm:', error);
            // Trả về empty paginated data khi có lỗi
            return {
                items: [],
                pageIndex: params.pageIndex,
                pageSize: params.pageSize,
                totalPages: 0,
                totalRecords: 0,
                hasPreviousPage: false,
                hasNextPage: false,
            };
        }
    }

    static async detail(id: string): Promise<News | null> {
        try {
            const res = await API.get<ApiRes<News>>(`${ApiRoute.News.root}/${id}`);
            if (!res.data.succeeded || !res.data.data) {
                null;
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return null;
        }
    }

    static async highlight(take: number): Promise<News[]> {
        try {
            const res = await API.get<ApiRes<News[]>>(ApiRoute.News.highlight(take));
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
        }
    }
}
