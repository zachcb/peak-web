import React from "react";
import styles from "./styles.css";

type Props = {
  type: string;
  placeholder: string;
  value: string | number;
  onChange?: React.FormEventHandler<HTMLInputElement>;
};

function Input({
  type = "submit", placeholder = "", value, onChange,
}: Props) {
  return (
    <input
      className={`${styles.input}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
