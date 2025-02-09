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
}
