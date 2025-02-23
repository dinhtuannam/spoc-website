export default class CacheConst {
    static isr = class {
        static page: number = 60; // revalidate mỗi 60s
    };
    static query = class {
        static table: number = 10 * 1000; // stale time 10s
        static menu: number = 60 * 1000; // select , option
        static category: number = 60 * 1000; // danh mục
        static list: number = 30 * 1000; // danh mục
    };
}
