'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const variants = {
  primary:
    'bg-[#327700] text-white hover:shadow-glow-green hover:scale-105 active:scale-95',
  secondary:
    'border-2 border-gray-200 text-gray-700 hover:border-[#327700] hover:text-[#327700] hover:bg-[#327700]/5',
  ghost:
    'text-[#327700] hover:bg-[#327700]/8',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        group inline-flex items-center justify-center gap-2 font-semibold
        transition-all duration-300 cursor-pointer select-none
        focus:outline-none focus:ring-2 focus:ring-[#327700]/50 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>
      )}
    </button>
  );
}
