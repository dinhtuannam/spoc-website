import ApiRoute from '@/constants/api-route';
import { ComponentEnum } from '@/enums/component.enum';
import { PageEnum } from '@/enums/page.enum';
import { API } from '@/lib/axios';

export default class LayoutService {
    static trangChu = {
        async getBanner(): Promise<Banner[]> {
            try {
                const res = await API.get<ApiRes<Banner[]>>(
                    ApiRoute.Layout.getComponent(PageEnum.TrangChu, ComponentEnum.Banner),
                );
                if (!res.data.succeeded || !res.data.data) {
                    return [];
                }
                return res.data.data;
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
                return [];
            }
        },
    };
}
