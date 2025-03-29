import React from 'react';

interface TooltipProps {
  variant: 'default' | 'outlined';
  backgroundColor?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  variant,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <span
      className={`px-4 py-2 rounded-lg font-semibold ${
        variant !== 'outlined'
          ? 'text-white border-none'
          : 'text-black border-2'
      }`}
      style={
        backgroundColor
          ? { backgroundColor: backgroundColor, width: width, height: height }
          : {}
      }
    >
      {children}
    </span>
  );
};
