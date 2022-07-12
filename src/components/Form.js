import React from "react";
import styles from "./Form.module.scss";
import Head from "./Head";

const Form = () => {
  return (
    <>
      <Head />
      <div className={styles.body}>
        <form>
          <div>
            <div className={styles.form_div}>name</div>
            <input
              id="0"
              placeholder="name"
              pattern="[a-zA-Z]+"
              required=""
              type="text"
              className={styles.form_control}
              value=""
              readOnly
            />
            <div className={styles.form_div}>surname</div>
            <input
              id="1"
              placeholder="surname"
              pattern="[a-zA-Z]+"
              required=""
              type="text"
              className={styles.form_control}
              value=""
              readOnly
            />
            <div className={styles.form_div}>email</div>
            <input
              id="2"
              placeholder="email"
              required=""
              type="email"
              className={styles.form_control}
              value=""
              readOnly
            />
            <div className={styles.form_div}>age</div>
            <input
              id="3"
              placeholder="age"
              pattern="^[1-9][0-9]*$"
              required=""
              type="text"
              className={styles.form_control}
              value=""
              readOnly
            />
            <div className={styles.form_div}>Favorite Color</div>
            <input
              id="4"
              placeholder="Favorite Color"
              pattern="[a-zA-Z]+"
              required=""
              type="text"
              className={styles.form_control}
              value=""
              readOnly
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
            }}
            className={styles.me2}
          >
            <div>Male</div>
            <input
              name="radio"
              type="radio"
              className={styles.form_check_input}
              readOnly
            />
            <div>Female</div>
            <input
              name="radio"
              type="radio"
              className={styles.form_check_input}
              readOnly
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
            className={styles.me2}
          >
            <input
              type="checkbox"
              className={styles.form_check_input}
              readOnly
            />
            <div>Receive the notification</div>
          </div>
          <div className={styles.btn_group}>
            <input
              type="button"
              disabled=""
              className={styles.btn}
              style={{ color: "yellow", backgroundColor: "green" }}
              value="OK"
            />
            <input
              type="button"
              className={styles.btn}
              value="CANCEL"
              style={{
                color: "#fff",
                backgroundColor: "#dc3545",
                borderColor: "#dc3545",
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
