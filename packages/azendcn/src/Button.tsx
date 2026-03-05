import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-colors disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-slate-900 text-slate-50 shadow-sm hover:bg-slate-800 active:bg-slate-700/90',
  secondary:
    'bg-slate-800 text-slate-50 hover:bg-slate-700 active:bg-slate-700/90',
  destructive:
    'bg-red-500 text-white shadow-sm hover:bg-red-400 active:bg-red-500/90',
  outline:
    'border border-slate-700/80 bg-slate-900/60 text-slate-50 hover:bg-slate-800/80 hover:border-slate-600',
  ghost:
    'bg-transparent text-slate-200 hover:bg-slate-800/70 hover:text-slate-50',
  link:
    'bg-transparent px-0 h-auto text-slate-400 hover:text-slate-300 underline-offset-4 hover:underline',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 rounded-md px-3 text-xs',
  md: 'h-9 rounded-md px-3.5 text-sm',
  lg: 'h-10 rounded-md px-4 text-sm',
  icon: 'h-9 w-9 rounded-md p-0',
};

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: Readonly<ButtonProps>) {
  const isIconOnly = size === 'icon';

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isIconOnly && 'gap-0',
        className,
      )}
      {...props}
    >
      {leftIcon && !isIconOnly && (
        <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      {children != null && <span>{children}</span>}
      {rightIcon && !isIconOnly && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </button>
  );
}
