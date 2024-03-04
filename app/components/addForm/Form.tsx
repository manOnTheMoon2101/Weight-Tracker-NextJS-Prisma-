"use client";

import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <form>
        <div className={styles.lostWeightDiv}>
          <label>Lost Weight?</label>
          <br />
          <input
            type="checkbox"
            required
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>

     
        <div className={styles.middleDiv}>
         
         <div style={{display:'inline-block'}}>
         <h3>Weight</h3>
          <input placeholder="187.2 kg..." required type="number" />

         </div>
         <div style={{display:'inline-block'}}>
<h3>Workout Days</h3>

          <input placeholder="2..." required type="number" />
          </div>
          <div style={{display:'inline-block'}}>
<h3>Info</h3>
          <input placeholder="info..." />
        </div>
        </div>



        <div className={styles.dateDiv}>
          <label>Date</label>
          <br />
          <input placeholder="Date" type="date" required />
        </div>
        <div className={styles.submitButton}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
