import { ComponentEnum } from '@/enums/component.enum';
import { PageEnum } from '@/enums/page.enum';

export default class ApiRoute {
    static Option = class {
        static highlight: string = '/api/Option/highlight';
    };
    static Contact = class {
        static root: string = '/api/Contact';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
    };
    static Product = class {
        static root: string = '/api/Product';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
        static highlight = (take: number) => {
            return `${this.root}/highlight?take=${take}`;
        };
        static similiar = (take: number, category: string) => {
            return `${this.root}/similiar?take=${take}&category=${category}`;
        };
    };
    static ProductImage = class {
        static root: string = '/api/ProductImage';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
    };
    static ProductCategory = class {
        static root: string = '/api/ProductCategory';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
    };
    static News = class {
        static root: string = '/api/News';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
        static search: string = `${this.root}/search`;
        static highlight = (take: number) => {
            return `${this.root}/highlight?take=${take}`;
        };
    };
    static NewsCategory = class {
        static root: string = '/api/NewsCategory';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
    };
    static Layout = class {
        static getPage = (page: PageEnum) => {
            return `/api/Layout/page/${page}`;
        };
        static getComponent = (page: PageEnum, component: ComponentEnum, sort: number | null = null) => {
            const baseUrl = `/api/Layout/page/${page}/component/${component}`;
            return sort !== null ? `${baseUrl}?sort=${sort}` : baseUrl;
        };
        static update = (page: PageEnum, component: ComponentEnum, sort: number | null = null) => {
            const baseUrl = `/api/Layout/page/${page}/component/${component}`;
            return sort !== null ? `${baseUrl}?sort=${sort}` : baseUrl;
        };
    };
}
