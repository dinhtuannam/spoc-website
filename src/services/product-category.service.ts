import ApiRoute from '@/constants/api-route';
import GeneratorHelper from '@/helpers/generator.helper';
import { API } from '@/lib/axios';

export default class ProductCategoryService {
    static async get(): Promise<ProductCategory[]> {
        try {
            const res = await API.get<ApiRes<ProductCategory[]>>(ApiRoute.ProductCategory.root);
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
        }
    }

    static async filter(skip: number, take: number): Promise<ProductCategory[]> {
        try {
            const res = await API.get<ApiRes<ProductCategory[]>>(
                `${ApiRoute.ProductCategory.filter}?Skip=${skip}&TotalRecord=${take}&OrderCol=CreatedDate&OrderDir=desc`,
            );
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
        }
    }

    static async menu(): Promise<ProductCategory[]> {
        try {
            const res = await API.get<ApiRes<ProductCategory[]>>(ApiRoute.ProductCategory.root);
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            const all: ProductCategory = {
                id: GeneratorHelper.newGuid(),
                code: '',
                name: 'Tất cả',
            };
            return [all, ...res.data.data];
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
        }
    }
}
