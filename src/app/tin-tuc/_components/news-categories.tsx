'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const categories = ['Tất cả', 'Siêu thực phẩm', 'Lối sống 3T', 'Gen di truyền'];

export function NewsCategories() {
    return (
        <Card className=" h-fit">
            {categories.map((category, index) => (
                <Button
                    key={index}
                    variant="ghost"
                    className={`p-4 hover:bg-[#0B6FF8E5] hover:!text-white laptop:p-6 w-full text-lg text-center hover:text-primary tracking-wider text-white
                   ${index === 0 ? 'bg-[#0B6FF8E5]' : 'bg-[#00000080]'} 
                   rounded-none`} // Đã thêm lớp 'rounded-none' để bỏ border-radius
                >
                    {category}
                </Button>
            ))}
        </Card>
    );
}
