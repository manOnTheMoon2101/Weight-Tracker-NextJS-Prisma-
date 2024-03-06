"use client";

import React from "react";
import { useState } from "react";
import styles from "./form.module.css";
import axios from "axios";

import { useRouter } from "next/navigation";
const Form = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [data, setData] = useState<any>({});

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("/api/data", data)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setData({});
        console.log(data);
        router.refresh();
      });
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleChangeString = (e: any) => {
    const name = e.target.name;
    const value = String(e.target.value);
    setData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (e: any) => {
    const name = e.target.name;
    const value = Boolean(e.target.value);
    console.log(isChecked);
    setIsChecked(!isChecked);

    setData((prevState: any) => ({ ...prevState, [name]: isChecked }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.middleDiv}>
          <div>
            <h3>Weight</h3>
            <input
              required
              type="number"
              name="weight"
              onChange={handleChange}
              value={data.weight || ""}
            />
          </div>
          <div>
            <h3>Workout Days</h3>

            <input
              required
              type="number"
              name="days"
              onChange={handleChange}
              value={data.days || ""}
            />
          </div>
          <div>
            <h3>Info</h3>
            <input
              name="info"
              onChange={handleChangeString}
              value={data.info || ""}
            />
          </div>
        </div>

        <div className={styles.lostWeightDiv}>
          <label>Lost Weight?</label>
          <br />

          
          <input
            type="checkbox"
            name="lostWeight"
            value={data.lostWeight || ""}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      {isChecked ? "checked" : "un-checked"}

        <div className={styles.submitButton}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
