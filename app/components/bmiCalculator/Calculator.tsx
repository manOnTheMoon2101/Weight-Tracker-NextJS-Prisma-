"use client";

import React from "react";
import styles from "./calculator.module.css";
import { useState } from "react";
function Calculator() {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    if (!weight || !height) return;
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(Number(bmiValue.toFixed(2)));
  };

  return (
    <div>
      <div className={styles.inputDiv}>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
      
      
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
      </div>

    
      <div className={styles.submitB}>
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>

      <div className={styles.dataDiv}>
        <p>{bmi}/m2</p>
        <p style={{ color: "rgb(198, 169, 105)" }}></p>
      </div>
    </div>
  );
}

export default Calculator;
