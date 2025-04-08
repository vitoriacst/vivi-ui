interface InputProps {
  variant?: 'default' | 'outlined' | 'disabled';
  backgroundColor?: string;
  type?: string;
  width?: string;
  height?: string;
  disabled: boolean;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  variant,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 rounded-lg font-semibold border-2"
      disabled={variant === 'disabled'}
    ></input>
  );
};
