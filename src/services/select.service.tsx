import { API } from '@/lib/axios';

export default class SelectService {
    static async get<TData>(api: string, value: keyof TData, label: keyof TData): Promise<SelectOption[]> {
        try {
            const res = await API.get<ApiRes<TData[]>>(api);
            if (!res.data.succeeded || !res.data.data) {
                return [];
            }
            return res.data.data.map((item) => ({
                value: String(item[value]),
                label: String(item[label]),
            }));
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            return [];
        }
    }
}
