import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <Card key={index} className="overflow-hidden group">
                    <Link href={`/tin-tuc/${item.slug}`}>
                        <div className="relative aspect-[4/3]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4">
                            <span className="text-primary text-sm font-medium">{item.category}</span>
                            <h3 className="font-semibold text-base laptop:text-lg mt-2 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                        </div>
                    </Link>
                </Card>
            ))}
        </div>
    );
}
