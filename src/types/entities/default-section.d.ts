type DefaultSection = {
    id: string;
    title: string;
    description: string;
    link: string;
    image: string;
};

interface UpdateDefaultSection extends DefaultSection {
    file?: File;
    deleted?: boolean;
}
