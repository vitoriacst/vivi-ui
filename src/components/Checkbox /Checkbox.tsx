interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};
