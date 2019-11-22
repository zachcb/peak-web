import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

const Input = ({ type, placeholder, children }) => (
  <input
    className={`${styles.input}`}
    type={type}
    placeholder={placeholder}
    value={children}
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
};

export default Input;
