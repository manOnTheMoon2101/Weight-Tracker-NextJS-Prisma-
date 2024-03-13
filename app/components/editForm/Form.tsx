"use client";

import React from "react";
import styles from "./form.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import useSWR from "swr";

import "react-toastify/dist/ReactToastify.css";

function FormEditForm(id: any) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data} = useSWR(`/api/data/${id.id}`, fetcher);
  const [postToEdit, setPostToEdit] = useState(id);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const router = useRouter();

  const handleEditPost = (e: any) => {
    e.preventDefault();
    axios
      .patch(`/api/data/${id.id}`, postToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
        toast.info("Edited Succesfully!");
      });
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPostToEdit((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleChangeString = (e: any) => {
    const name = e.target.name;
    const value = String(e.target.value);
    setPostToEdit((prevState: any) => ({ ...prevState, [name]: value }));
  };
  const handleCheckboxChange = (e: any) => {
    const name = e.target.name;
    const value = Boolean(e.target.value);

    setIsChecked(!isChecked);

    setPostToEdit((prevState: any) => ({ ...prevState, [name]: isChecked }));
  };

  return (
    <>
      <form onSubmit={handleEditPost}>
        <div className={styles.middleDiv}>
          <div>
            <h3>Weight</h3>
            <input
              required
              type="number"
              name="weight"
              onChange={handleChange}
              defaultValue={data.weight || ""}
            />
          </div>
          <div>
            <h3>Workout Days</h3>

            <input
              required
              type="number"
              name="days"
              onChange={handleChange}
              defaultValue={data.daysWorkedOut || ""}
            />
          </div>
          <div>
            <h3>Info</h3>
            <input
              name="info"
              onChange={handleChangeString}
              defaultValue={data.extraInfo || ""}
            />
          </div>
        </div>

        <div className={styles.lostWeightDiv}>
          <label>Lost Weight?</label>
          <br />

          <input
            type="checkbox"
            name="lostWeight"
            defaultChecked={!isChecked}
            onChange={handleCheckboxChange}
            value={data.loseWeight || ""}
          />
        </div>

        <div className={styles.submitButton}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default FormEditForm;
