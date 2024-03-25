"use client";

import React from "react";
import styles from "./editForm.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import useSWR from "swr";

import "react-toastify/dist/ReactToastify.css";

function FormEditForm(id: any) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR(`/api/data/${id.id}`, fetcher);
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
        <div className={styles.leftDiv}>
          <div>
            <h3 style={{ color: "black" }}>Weight</h3>
            <input
              required
              type="number"
              name="weight"
              onChange={handleChange}
              defaultValue={data.weight || ""}
            />
          </div>
          <div>
            <h3 style={{ color: "black" }}>Workout Days</h3>

            <input
              required
              type="number"
              name="days"
              onChange={handleChange}
              defaultValue={data.daysWorkedOut || ""}
            />
          </div>
          <h3 style={{ color: "black" }}>Lost Weight?</h3>

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
          <div>
            <h3 style={{ color: "black" }}>Info</h3>
            <input
              name="info"
              onChange={handleChangeString}
              defaultValue={data.extraInfo || ""}
            />
          </div>
        </div>

        <div className={styles.submitButton}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default FormEditForm;
