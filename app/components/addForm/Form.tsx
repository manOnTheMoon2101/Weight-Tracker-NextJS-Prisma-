"use client";

import React from "react";
import { useState } from "react";
import styles from "./form.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";
const Form = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

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
        toast.success("Submitted Succesfully!");
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
        <div className={styles.leftDiv}>
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

          <h3>Lost Weight?</h3>

          <div className={styles.checkboxCon}>
            <input
              id="checkbox"
              type="checkbox"
              name="lostWeight"
              defaultChecked={!isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>

        <div className={styles.rightDiv}>
          <h3>Info</h3>
          <input
            name="info"
            onChange={handleChangeString}
            value={data.info || ""}
          />
        </div>
        <div className={styles.submitButton}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
