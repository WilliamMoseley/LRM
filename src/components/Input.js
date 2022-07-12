import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, placeholder, pattern }) => {
  return (
    <>
      <div className={styles.form_div}>{label}</div>
      <input
        id="0"
        placeholder={placeholder}
        pattern={pattern}
        required=""
        type="text"
        className={styles.form_control}
        value=""
        readOnly
      />
    </>
  );
};

export default Input;
