import React from "react";

const Input = ({
  name,
  type,
  placeholder,
  label,
  value,
  center,
  handleChange,
}) => (
  <div className="flex flex-col space-y-2">
    {label && (
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
    )}
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={`border p-3 rounded-md transition-all duration-300 hover:border-primary focus:ring-2 focus:ring-primary ${
        center && "text-center"
      }`}
    />
  </div>
);

export default Input;
