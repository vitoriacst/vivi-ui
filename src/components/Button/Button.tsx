import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'outlined' | 'disabled';
  backgroundColor?: string;
  width?: string;
  height?: string;
  disabled: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <button
      disabled={variant === 'disabled'}
      className={`px-4 py-2 rounded-lg font-semibold ${
        variant !== 'outlined' ? 'text-white' : 'text-black border-2'
      }`}
      style={
        backgroundColor
          ? { backgroundColor: backgroundColor, width: width, height: height }
          : {}
      }
    >
      {children}
    </button>
  );
};
