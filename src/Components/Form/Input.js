import React from "react";
import Error from "../Helper/Error";
import style from "./Input.module.css";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        type={type}
        className={style.input}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Error error={error} />
    </div>
  );
};

export default Input;
