import React from "react";
import styles from "./Head.module.scss";
import SubHead from "./SubHead";

const Head = () => {
  return (
    <div className={styles.header}>
      <h1>HEADING</h1>
      <SubHead />
    </div>
  );
};

export default Head;
