import React from "react";
import Grid from "../layout/Grid";
import Input from "./Input";

export default function LabelAndInput({
  name,
  label,
  type = "text",
  register,
  readOnly,
  placeholder,
}) {
  return (
    <Grid cols="12 4 4 4">
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <Input
          {...(register ? register(name) : {})}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
        />
      </div>
    </Grid>
  );
}
