import { SocialMediaEnum } from '@/enums/social-media.enum';

type SocialMedia = {
    id: string;
    title: string;
    description: string;
    type: SocialMediaEnum;
    link: string;
    sort: number;
};
