import React from "react";
import Icon from "./Icon";

const Button = ({
  value,
  type,
  action,
  variant = "default",
  loading = false,
  fullWidth = false,
  icon,
}) => {
  const variantClass = {
    primary:
      "bg-primary text-white hover:bg-primaryDark focus:ring-primaryDark",
    secondary:
      "bg-secondary text-white hover:bg-secondaryDark focus:ring-secondaryDark",
    frame:
      "bg-white text-primary border border-primary hover:bg-gray-100 focus:ring-primary",
    green:
      "bg-green-100 text-green-600 hover:bg-green-200 focus:ring-bg-green-200",
    red: "bg-red-100 text-red-600 hover:bg-red-200 focus:ring-bg-red-200",
    default: "bg-gray-100 text-primary hover:bg-gray-300 focus:ring-gray-300",
  }[variant];

  const buttonClass = `${variantClass} ${fullWidth && "w-full"} ${
    icon ? "justify-between" : "justify-center"
  } p-3 flex items-center whitespace-nowrap space-x-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transform transition-transform duration-500 hover:scale-105 hover:rotate-2`;

  return (
    <button type={type} className={buttonClass} onClick={action}>
      {value && <span>{loading ? <Icon type="loading" /> : value}</span>}
      {icon && <Icon type={icon} />}
    </button>
  );
};

export default Button;
