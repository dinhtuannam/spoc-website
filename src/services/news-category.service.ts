import ApiRoute from '@/constants/api-route';
import GeneratorHelper from '@/helpers/generator.helper';
import { API } from '@/lib/axios';

export default class NewsCategoryService {
    static async get(): Promise<NewsCategory[]> {
        try {
            const res = await API.get<ApiRes<NewsCategory[]>>(ApiRoute.NewsCategory.root);
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
        }
    }

    static async menu(): Promise<NewsCategory[]> {
        try {
            const res = await API.get<ApiRes<NewsCategory[]>>(ApiRoute.NewsCategory.root);
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            const all: NewsCategory = {
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
