'use client';

import React from 'react';
import { CartProviderContext } from '@/context/CartContext';
import { OrderProvider as ContextProvider } from '@/context/OrderContext';
import { BookOrderModal } from '@/components/books/BookOrderModal';
import { CartDrawer } from '@/components/cart/CartDrawer';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CartProviderContext>
      <ContextProvider>
        {children}
        <BookOrderModal />
        <CartDrawer />
      </ContextProvider>
    </CartProviderContext>
  );
};
