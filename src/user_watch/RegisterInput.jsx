import React, { useState } from "react";

const RegisterInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <div className="formInput">
        {/* <label className='label-in'>{label}</label> */}
        <input
          className="form-inputt"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default RegisterInput;
