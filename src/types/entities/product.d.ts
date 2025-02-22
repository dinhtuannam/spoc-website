type Product = {
    id: string;
    code: string;
    name: string;
    introduction: string;
    description: string;
    instruction: string;
    price: number;
    link: string;
    image?: string;
    highlight: boolean;
    markDate: string;
    categoryId?: string;
    category?: Category;
};
