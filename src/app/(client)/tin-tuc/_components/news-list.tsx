import NewsCard from '@/components/card/news.card';
import AppGrid from '@/components/grid';

interface NewsItem {
    category: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

interface NewsListProps {
    items: NewsItem[];
}

export function NewsList({ items }: NewsListProps) {
    return (
        <AppGrid rows={3}>
            {items.map((item, index) => (
                <NewsCard key={index} />
            ))}
        </AppGrid>
    );
}
