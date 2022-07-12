import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <h1>HEADING</h1>
        <div className={styles.card_title}>
          <h3>SUBHEADING</h3>
        </div>
      </div>
      <div className={styles.card_body}>
        <form>
          <div>
            <div className={styles.form_div}>name</div>
            <input id="0" placeholder="name" pattern="[a-zA-Z]+" required="" type="text" className={styles.form_control} value="" readOnly />
            <div className={styles.form_div}>surname</div>
            <input id="1" placeholder="surname" pattern="[a-zA-Z]+" required="" type="text" className={styles.form_control} value="" readOnly />
            <div className={styles.form_div}>email</div>
            <input id="2" placeholder="email" required="" type="email" className={styles.form_control} value="" readOnly />
            <div className={styles.form_div}>age</div>
            <input id="3" placeholder="age" pattern="^[1-9][0-9]*$" required="" type="text" className={styles.form_control} value="" readOnly />
            <div className={styles.form_div}>Favorite Color</div>
            <input id="4" placeholder="Favorite Color" pattern="[a-zA-Z]+" required="" type="text" className={styles.form_control} value="" readOnly />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }} className={styles.me2}>
            <div>Male</div><input name="radio" type="radio" className={styles.form_check_input} readOnly />
            <div>Female</div><input name="radio" type="radio" className={styles.form_check_input} readOnly />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} className={styles.me2}>
          <input type="checkbox" className={styles.form_check_input} readOnly /><div>Receive the notification</div>
          </div>
          <div className={styles.btn_group}>
            <input type="button" disabled="" className={styles.btn} style={{ color: 'yellow', backgroundColor: 'green' }} value="OK" />
            <input type="button" className={styles.btn} value="CANCEL" style={{
              color: '#fff',
              backgroundColor: '#dc3545',
              borderColor: '#dc3545'
            }} />
          </div>
        </form ></div >
    </div >
  );
};

export default Card;
