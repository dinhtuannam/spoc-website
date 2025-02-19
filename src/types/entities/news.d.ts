type News = {
    id: string;
    code: string;
    title: string;
    shortDescription?: string;
    content: string;
    categoryId?: string;
    category: NewsCategory;
    createdDate?: string;
    updatedDate?: string;
};
