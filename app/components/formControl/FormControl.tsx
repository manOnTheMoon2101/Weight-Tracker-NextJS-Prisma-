"use client";

import React from "react";
import styles from "./form.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import Modal from "../modal/modal";
function FormControl() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };


  return (
    <>
      <div className={styles.buttonDiv}>
        <h3>Edit/Delete</h3>

        <button onClick={toggleModal}>
          <MdEdit />
        </button>
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
          <p>edit</p>
        </Modal>

        <button onClick={toggleModal2}>
          <MdDelete />
        </button>
        <Modal isOpen={isModalOpen2} toggleModal={toggleModal2}>
          <p>You're about to Delete a record.Are you sure?</p>
        </Modal>
      </div>
    </>
  );
}

export default FormControl;
