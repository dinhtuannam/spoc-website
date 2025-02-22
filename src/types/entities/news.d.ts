type News = {
    id: string;
    code: string;
    title: string;
    shortDescription?: string;
    content: string;
    image: string;
    categoryId?: string;
    category?: NewsCategory;
    createdDate?: string;
    updatedDate?: string;
};
