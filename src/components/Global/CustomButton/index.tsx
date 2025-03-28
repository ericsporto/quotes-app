import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const baseStyles =
  'flex items-center justify-center h-11 sm:h-12 lg:h-15 rounded-lg lg:text-xl font-semibold ease-in-out duration-200 cursor-pointer px-4 w-full';

const variants = {
  primary:
    'bg-secondary text-gray-100 hover:bg-secondary-hover disabled:cursor-not-allowed',
  secondary:
    'border border-secondary text-secondary disabled:cursor-not-allowed',
};

export default function CustomButton({
  disabled = false,
  ...props
}: ButtonProps) {
  props.variant ??= 'primary';
  return (
    <button
      className={clsx(baseStyles, variants[props.variant])}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </button>
  );
}
