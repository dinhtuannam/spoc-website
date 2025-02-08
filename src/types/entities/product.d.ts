type Product = {
    id: string;
    code: string;
    name: string;
    introduction: string;
    description: string;
    instruction: string;
    price: number;
    link: string;
    highlight: boolean;
    markDate: string;
    category?: Category;
};
