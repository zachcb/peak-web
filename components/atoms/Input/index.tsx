import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

const Input = ({ type, placeholder, children, onChange }) => (
  <input
    className={`${styles.input}`}
    type={type}
    placeholder={placeholder}
    value={children}
    onChange={onChange}
  />
);

Input.defaultProps = {
  type: "submit",
  placeholder: "",
  children: "",
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Input;
