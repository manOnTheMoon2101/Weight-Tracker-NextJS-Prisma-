"use client";

import React from "react";
import styles from "./filter.module.css";

import { useState } from "react";
import { ReactNode } from "react";
import Modal from "../modal/modal";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCalculator } from "react-icons/fa";
import Form from "../addForm/Form";
import Calculator from "../bmiCalculator/Calculator";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MyComponentProps {
  children: ReactNode;
}

const FilterDiv: React.FC<MyComponentProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.filterDiv}>
        <button className={styles.buttonAddDiv} onClick={toggleModal}>
          Add Record <IoIosAddCircleOutline />
        </button>
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
          <Form />
        </Modal>

        <button className={styles.buttonDiv} onClick={toggleModal2}>
          BMI Calculator <FaCalculator />
        </button>
        <Modal isOpen={isModalOpen2} toggleModal={toggleModal2}>
          <Calculator />
        </Modal>
      </div>

      <div>{children}</div>
    </>
  );
};

export default FilterDiv;
