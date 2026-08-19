import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WhatsAppActionType } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  productName?: string;
  type?: WhatsAppActionType;
  customMessage?: string;
  phone?: string;
  variant?: 'solid' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  label?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  productName,
  type = 'general',
  customMessage,
  phone,
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  label,
  className = '',
}) => {
  const url = getWhatsAppUrl({ productName, type, customMessage, phone });

  const sizeClasses =
    size === 'sm'
      ? 'px-3 py-1.5 text-xs gap-1.5'
      : size === 'lg'
      ? 'px-7 py-3.5 text-base gap-2.5 font-semibold'
      : 'px-5 py-2.5 text-sm gap-2 font-medium';

  const variantClasses =
    variant === 'outline'
      ? 'border-2 border-[#00A859] text-[#00A859] hover:bg-[#00A859] hover:text-white'
      : variant === 'ghost'
      ? 'text-[#00A859] hover:bg-[#00A859]/10'
      : variant === 'icon'
      ? 'p-2 text-white bg-[#00A859] hover:bg-[#00924d] rounded-full shadow-md'
      : 'bg-[#00A859] text-white hover:bg-[#00924d] shadow-md hover:shadow-lg';

  const defaultLabel =
    type === 'book'
      ? 'Enquire on WhatsApp'
      : type === 'course'
      ? 'Enquire / Join via WhatsApp'
      : type === 'droplet'
      ? 'Enquire on WhatsApp'
      : 'Talk to Us on WhatsApp';

  const displayLabel = label || defaultLabel;

  if (variant === 'icon') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={displayLabel}
        className={`inline-flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${variantClasses} ${className}`}
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 active:scale-[0.98] ${
        fullWidth ? 'w-full' : ''
      } ${sizeClasses} ${variantClasses} ${className}`}
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
      <span>{displayLabel}</span>
    </a>
  );
};
