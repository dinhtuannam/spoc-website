'use client';

import { CartItems } from './_components/cart-items';
import { OrderSummary } from './_components/order-summary';
import { Breadcrumb } from '@/components/breadcrumb';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

function GioHang() {
    const breadcrumb: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/',
        },
        {
            title: 'Giỏ hàng',
            link: '/gio-hang',
        },
    ];

    // Mock data
    const cartItems: CartItem[] = [
        {
            id: 1,
            name: 'Viên uống Feroglobin B12 Vitabiotics hỗ trợ tăng khả năng tạo máu, tăng cường sức khỏe',
            price: 550000,
            quantity: 1,
            image: '/images/product.png',
        },
        {
            id: 2,
            name: 'Viên uống Feroglobin B12 Vitabiotics hỗ trợ tăng khả năng tạo máu, tăng cường sức khỏe',
            price: 550000,
            quantity: 1,
            image: '/images/product.png',
        },
        {
            id: 3,
            name: 'Viên uống Feroglobin B12 Vitabiotics hỗ trợ tăng khả năng tạo máu, tăng cường sức khỏe',
            price: 550000,
            quantity: 1,
            image: '/images/product.png',
        },
        {
            id: 4,
            name: 'Viên uống Feroglobin B12 Vitabiotics hỗ trợ tăng khả năng tạo máu, tăng cường sức khỏe',
            price: 550000,
            quantity: 1,
            image: '/images/product.png',
        },
    ];

    const handleQuantityChange = (id: number, quantity: number) => {
        console.log('Quantity changed:', id, quantity);
    };

    const handleRemoveItem = (id: number) => {
        console.log('Remove item:', id);
    };

    const handleOrderSubmit = (formData: any) => {
        console.log('Order submitted:', formData);
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = 30000;

    return (
        <div className="page-container">
            <div className="app-padding mt-5 laptop:mt-10">
                <Breadcrumb values={breadcrumb} />

                <div className="grid laptop:grid-cols-12 gap-4 laptop:gap-8 mt-8">
                    <CartItems
                        items={cartItems}
                        onQuantityChange={handleQuantityChange}
                        onRemoveItem={handleRemoveItem}
                    />
                    <OrderSummary subtotal={subtotal} shippingFee={shippingFee} onSubmit={handleOrderSubmit} />
                </div>
            </div>
        </div>
    );
}

export default GioHang;
