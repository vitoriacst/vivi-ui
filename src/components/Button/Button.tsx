import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outlined';
  color?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  color,
  width,
  height,
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold ${
        variant === 'primary' ? 'text-white' : 'text-black border-2'
      }`}
      style={
        variant === 'primary' && color
          ? { backgroundColor: color, width: width, height: height }
          : {}
      }
    >
      {children}
    </button>
  );
};
