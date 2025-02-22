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

        async getSection(sort: 2 | 4): Promise<DefaultSection | undefined | null> {
            try {
                const res = await API.get<ApiRes<DefaultSection>>(
                    ApiRoute.Layout.getComponent(PageEnum.TrangChu, ComponentEnum.DefaultSection, sort),
                );
                if (!res.data.succeeded || !res.data.data) {
                    null;
                }
                return res.data.data;
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
                null;
            }
        },

        async getSlider(): Promise<ImageSlider | undefined | null> {
            try {
                const res = await API.get<ApiRes<ImageSlider>>(
                    ApiRoute.Layout.getComponent(PageEnum.TrangChu, ComponentEnum.ImageSlider),
                );
                if (!res.data.succeeded || !res.data.data) {
                    null;
                }
                return res.data.data;
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
                null;
            }
        },
    };

    static async getSection(page: PageEnum, sort: number): Promise<DefaultSection | undefined | null> {
        try {
            const res = await API.get<ApiRes<DefaultSection>>(
                ApiRoute.Layout.getComponent(page, ComponentEnum.DefaultSection, sort),
            );
            if (!res.data.succeeded || !res.data.data) {
                null;
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            null;
        }
    }

    static async getBanner(page: PageEnum, sort: number): Promise<Banner | undefined | null> {
        try {
            const res = await API.get<ApiRes<Banner>>(ApiRoute.Layout.getComponent(page, ComponentEnum.Banner, sort));
            if (!res.data.succeeded || !res.data.data) {
                null;
            }
            return res.data.data;
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            null;
        }
    }
}
