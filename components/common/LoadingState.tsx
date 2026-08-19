import React from 'react';
import { SearchX, BookOpen, Inbox } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading literature and collections...',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
      <div className="relative w-12 h-12 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-[#0098DA]/20 border-t-[#0098DA] animate-spin" />
        <BookOpen className="w-5 h-5 absolute inset-0 m-auto text-[#00A859] animate-pulse" />
      </div>
      <p className="text-sm font-medium text-gray-600 tracking-wide">{message}</p>
    </div>
  );
};

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  icon?: 'search' | 'books' | 'inbox';
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No items found',
  description = 'Try broadening your search query or selecting a different category filter.',
  actionLabel,
  actionHref,
  onAction,
  icon = 'search',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/80 ${className}`}>
      <div className="w-14 h-14 rounded-full bg-[#0098DA]/10 text-[#0098DA] flex items-center justify-center mb-4">
        {icon === 'books' ? (
          <BookOpen className="w-7 h-7" />
        ) : icon === 'inbox' ? (
          <Inbox className="w-7 h-7" />
        ) : (
          <SearchX className="w-7 h-7" />
        )}
      </div>

      <h3 className="font-serif text-2xl font-semibold text-[#111111] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm max-w-md mb-6 leading-relaxed">{description}</p>

      {actionLabel && (actionHref || onAction) && (
        <PrimaryButton href={actionHref} onClick={onAction} size="sm">
          {actionLabel}
        </PrimaryButton>
      )}
    </div>
  );
};
