import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outlined';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold ${
        variant === 'primary'
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-black'
      }`}
    >
      {children}
    </button>
  );
};
