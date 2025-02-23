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

type ProductOverview = {
    id: string;
    code: string;
    name: string;
    image?: string;
    category?: string;
};

type ProductDetail = {
    id: string;
    code: string;
    name: string;
    introduction: string;
    description: string;
    instruction: string;
    categoryId?: string;
    category?: string;
    images: string[];
};
