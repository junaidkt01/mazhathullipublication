import React from 'react';
import { SearchX, BookOpen, Inbox } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

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
