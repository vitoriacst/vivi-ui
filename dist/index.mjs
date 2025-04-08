import { jsx } from 'react/jsx-runtime';

// src/components/Button/Button.tsx
var Button = ({
  variant,
  children,
  backgroundColor,
  width,
  height
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      disabled: variant === "disabled",
      className: `px-4 py-2 rounded-lg font-semibold ${variant !== "outlined" ? "text-white" : "text-black border-2"}`,
      style: backgroundColor ? { backgroundColor, width, height } : {},
      children
    }
  );
};
var Checkbox = ({ checked, onChange }) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      checked,
      onChange: (e) => onChange(e.target.checked)
    }
  );
};
var Input = ({
  type,
  placeholder,
  variant
}) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      placeholder,
      className: "px-4 py-2 rounded-lg font-semibold border-2",
      disabled: variant === "disabled"
    }
  );
};
var Tooltip = ({
  children,
  variant,
  backgroundColor,
  width,
  height
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `px-4 py-2 rounded-lg font-semibold ${variant !== "outlined" ? "text-white border-none" : "text-black border-2"}`,
      style: backgroundColor ? { backgroundColor, width, height } : {},
      children
    }
  );
};

export { Button, Checkbox, Input, Tooltip };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map