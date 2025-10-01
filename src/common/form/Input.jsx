import React from "react";

export default function Input(props) {
  const { placeholder, readOnly, type = "text", ...rest } = props;
  return (
    <input
      {...rest}
      className="form-control"
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}
    />
  );
}
