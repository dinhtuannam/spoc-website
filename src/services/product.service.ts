import ApiRoute from '@/constants/api-route';
import { API } from '@/lib/axios';

export default class ProductService {
    static async get(id: string): Promise<Product | null | undefined> {
        try {
            const res = await API.get<ApiRes<Product>>(`${ApiRoute.Product.root}/${id}`);
            if (!res.data.succeeded || !res.data.data) {
                return null;
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            null;
        }
    }

    static async all(): Promise<Product[]> {
        try {
            const res = await API.get<ApiRes<Product[]>>(`${ApiRoute.Product.root}`);
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
        }
    }

    static async highlight(take: number): Promise<Product[]> {
        try {
            const res = await API.get<ApiRes<Product[]>>(ApiRoute.Product.highlight(take));
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
        }
    }

    static async similiar(take: number, category: string | undefined): Promise<Product[]> {
        try {
            const res = await API.get<ApiRes<Product[]>>(ApiRoute.Product.similiar(take, category ?? ''));
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
