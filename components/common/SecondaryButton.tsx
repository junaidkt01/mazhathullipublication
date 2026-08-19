import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'dark' | 'white' | 'blue' | 'green';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'dark',
  size = 'md',
  icon,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'px-4 py-2 text-xs'
      : size === 'lg'
      ? 'px-8 py-4 text-base'
      : 'px-6 py-3 text-sm';

  const variantClasses =
    variant === 'white'
      ? 'border border-white/40 text-white hover:bg-white/10'
      : 'border border-gray-300 text-gray-800 hover:border-gray-900 hover:bg-gray-50';

  const baseClasses = `inline-flex items-center justify-center font-medium tracking-wide rounded-lg transition-all duration-200 active:scale-[0.98] ${sizeClasses} ${variantClasses} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span>{children}</span>
        {icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      <span>{children}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};
