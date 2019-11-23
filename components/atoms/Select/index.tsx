import React from "react";
import styles from "./styles.css";

type Props = {
  name?: string;
  type?: string;
  placeholder: string;
  value?: string | number;
  onChange?: React.FormEventHandler<HTMLInputElement>;
};

function Input({
  name, type = "text", placeholder = "", value = "", onChange,
}: Props) {
  return (
    <input
      name={name}
      className={`w-full mb-3 p-2 font-black tracking-wide b-black-500 placeholder-gray-600 border-gray-800 border-4 rounded shadow ${styles.input}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
