type Banner = {
    id: string;
    link: string;
    image: string;
    sort: number;
};

interface UpdateBanner extends Banner {
    file?: File;
}
