import React from "react";
import styles from "./Card.module.scss";
import Form from "./Form";


const Card = () => {
  return (
    <div className={styles.card}>
      <Form />
    </div>
  );
};

export default Card;
