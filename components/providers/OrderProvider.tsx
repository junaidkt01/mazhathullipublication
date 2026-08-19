'use client';

import React from 'react';
import { OrderProvider as ContextProvider } from '@/context/OrderContext';
import { BookOrderModal } from '@/components/books/BookOrderModal';

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ContextProvider>
      {children}
      <BookOrderModal />
    </ContextProvider>
  );
};
