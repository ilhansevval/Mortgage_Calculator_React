import React from "react";

function FormInputGroup({
  text,
  icon,
  placeholder,
  value,
  onInput,
  onkeyup,
  readOnly = false,
  min,
  required
}) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text bg-secondary p-2 text-dark bg-opacity-50">
        {text} {icon}
      </span>
      <input
        type="number"
        value={value}
        className="form-control bg-secondary p-2 text-dark bg-opacity-25"
        placeholder={placeholder}
        onInput={onInput}
        onKeyUp={onkeyup}
        readOnly={readOnly}
        min={min}     
        required={required}
      />
    </div>
  );
}

export default FormInputGroup;
