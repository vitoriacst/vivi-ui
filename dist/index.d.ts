import React$1 from 'react';

interface ButtonProps {
    variant?: 'default' | 'outlined' | 'disabled';
    backgroundColor?: string;
    width?: string;
    height?: string;
    disabled: boolean;
    onClick?: () => void;
    children: React$1.ReactNode;
}
declare const Button: React$1.FC<ButtonProps>;

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled: boolean;
}
declare const Checkbox: React.FC<CheckboxProps>;

interface InputProps {
    variant?: 'default' | 'outlined' | 'disabled';
    backgroundColor?: string;
    type?: string;
    width?: string;
    height?: string;
    disabled: boolean;
    placeholder?: string;
}
declare const Input: React.FC<InputProps>;

interface TooltipProps {
    variant: 'default' | 'outlined';
    backgroundColor?: string;
    width?: string;
    height?: string;
    children: React$1.ReactNode;
}
declare const Tooltip: React$1.FC<TooltipProps>;

export { Button, Checkbox, Input, Tooltip };
