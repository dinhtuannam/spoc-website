import ApiRoute from '@/constants/api-route';
import { API } from '@/lib/axios';

export default class NewsService {
    static async search(): Promise<News[]> {
        try {
            const res = await API.get<ApiRes<News[]>>(ApiRoute.News.root);
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
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
