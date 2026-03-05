import type { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Button } from './Button';

export type InputSize = 'default' | 'small';
export type LabelPosition = 'default' | 'left';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label shown above or to the left of the input */
  label?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Position of the label: above input or to the left */
  labelPosition?: LabelPosition;
  /** Visual and touch target size */
  size?: InputSize;
  /** Optional button rendered after the input (e.g. "Subscribe") */
  button?: ReactNode;
  /** Container class name */
  className?: string;
}

const sizeClasses = {
  default: 'h-10 py-2 text-base leading-6',
  small: 'h-9 py-2 text-sm leading-5',
} as const;

export function Input({
  label,
  helperText,
  labelPosition = 'default',
  size = 'default',
  button,
  className,
  disabled,
  id: idProp,
  ...props
}: Readonly<InputProps>) {
  const id =
    idProp ?? `input-${Math.random().toString(36).slice(2, 9)}`;
  const showLabel = label != null;
  const showHelper = helperText != null;
  const isLabelLeft = labelPosition === 'left';

  return (
    <div
      className={clsx(
        'flex flex-col gap-1.5',
        disabled && 'opacity-50',
        isLabelLeft && 'w-full max-w-[384px]',
        className,
      )}
    >
      {showLabel &&
        (isLabelLeft ? null : (
          <label
            htmlFor={id}
            className="shrink-0 text-sm font-medium leading-5 text-slate-900"
          >
            {label}
          </label>
        ))}

      <div
        className={clsx(
          'flex w-full max-w-[384px]',
          isLabelLeft ? 'items-center gap-4' : 'flex-col gap-1',
          !isLabelLeft && button && 'flex-row items-stretch gap-2',
        )}
      >
        {isLabelLeft && showLabel && (
          <label
            htmlFor={id}
            className="w-[84px] shrink-0 text-sm font-medium leading-5 text-slate-900"
          >
            {label}
          </label>
        )}

        <div className="relative min-w-0 flex-1">
          <input
            id={id}
            disabled={disabled}
            className={clsx(
              'w-full rounded-md border border-slate-300 bg-white pl-3 pr-3 text-slate-900 placeholder:text-slate-400',
              'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-0',
              'disabled:cursor-not-allowed disabled:bg-slate-50',
              sizeClasses[size],
              button && 'pr-14',
            )}
            aria-describedby={showHelper ? `${id}-helper` : undefined}
            {...props}
          />
        </div>

        {button != null && !isLabelLeft && (
          <div className="shrink-0">{button}</div>
        )}
      </div>

      {showHelper && (
        <p id={`${id}-helper`} className="text-sm leading-5 text-slate-500">
          {helperText}
        </p>
      )}
    </div>
  );
}

/** Convenience: Input with a primary "Subscribe" (or custom) button. */
export function InputWithButton({
  buttonLabel = 'Subscribe',
  onButtonClick,
  size = 'default',
  ...inputProps
}: InputProps & { buttonLabel?: string; onButtonClick?: () => void }) {
  return (
    <Input
      size={size}
      {...inputProps}
      button={
        <Button
          type="button"
          variant="primary"
          onClick={onButtonClick}
          className={clsx(
            'rounded-md! px-4 text-sm font-medium text-white tracking-tight!',
            size === 'small' ? 'h-9!' : 'h-10!',
          )}
        >
          {buttonLabel}
        </Button>
      }
    />
  );
}
