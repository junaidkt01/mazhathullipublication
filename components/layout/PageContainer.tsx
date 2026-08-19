import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <main className={`min-h-screen pt-24 sm:pt-28 pb-16 overflow-x-hidden ${className}`}>
      {children}
    </main>
  );
};
