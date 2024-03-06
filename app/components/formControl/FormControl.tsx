"use client";

import React from "react";
import styles from "./form.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Modal from "../modal/modal";

function FormControl(id:any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);



  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

  const router = useRouter();

  const handleDeletePost = (id:any) => {
    axios
    .delete(`/api/data/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
     
      router.refresh();
    });
  }

  return (
    <>
      <div className={styles.buttonDiv}>
        <h3>Edit/Delete</h3>

        <button onClick={toggleModal}>
          <MdEdit color="#606C38" />
        </button>
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
          <p>edit</p>
        </Modal>

        <button onClick={toggleModal2}>
          <MdDelete color="#B84346"/>
        </button>
        <Modal isOpen={isModalOpen2} toggleModal={toggleModal2}>
          <p>Are you sure?</p>
          <button  onClick={() => handleDeletePost(id.id)}>Yes</button>
          <button onClick={toggleModal2}>No</button>
        </Modal>
      </div>
    </>
  );
}

export default FormControl;
