export default class ApiRoute {
    static Product = class {
        static root: string = '/api/Products';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
    };
    static ProductCategory = class {
        static root: string = '/api/ProductCategory';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
    };
    static NewsCategory = class {
        static root: string = '/api/NewsCategory';
        static filter: string = `${this.root}/filter`;
        static pagination: string = `${this.root}/pagination`;
    };
}
