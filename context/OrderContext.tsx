'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface OrderItem {
  id?: string;
  title: string;
  author?: string;
  cover?: string;
  price?: number;
  category?: string;
  type?: 'book' | 'droplet' | 'product' | string;
}

interface OrderContextType {
  isOpen: boolean;
  item: OrderItem | null;
  openOrderModal: (item: OrderItem) => void;
  closeOrderModal: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState<OrderItem | null>(null);

  const openOrderModal = (orderItem: OrderItem) => {
    setItem(orderItem);
    setIsOpen(true);
  };

  const closeOrderModal = () => {
    setIsOpen(false);
  };

  return (
    <OrderContext.Provider value={{ isOpen, item, openOrderModal, closeOrderModal }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderModal = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderModal must be used within an OrderProvider');
  }
  return context;
};
