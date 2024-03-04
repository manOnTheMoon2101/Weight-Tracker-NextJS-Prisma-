"use client";

import React from "react";
import styles from "./filter.module.css";
import { IoIosCalculator } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { ReactNode } from "react";
import Modal from "../modal/modal";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCalculator } from "react-icons/fa";
import Form from "../addForm/Form";
import Calculator from "../bmiCalculator/Calculator";
interface MyComponentProps {
  children: ReactNode;
}

const FilterDiv: React.FC<MyComponentProps> = ({ children }) => {
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
      <div className={styles.filterDiv}>
        <select className={styles.selectDiv}>
          <option>March</option>
          <option>April</option>
        </select>

        <select className={styles.selectDiv}>
          <option>Gained Weight</option>
          <option>Lost Weight</option>
        </select>

        
        <button  className={styles.buttonAddDiv} onClick={toggleModal}>
          Add Record <IoIosAddCircleOutline />
        </button>
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
      
         <Form/>
        </Modal>


        
        <button  className={styles.buttonDiv} onClick={toggleModal2}>
          BMI Calculator <FaCalculator />
        </button>
        <Modal isOpen={isModalOpen2} toggleModal={toggleModal2}>
         <Calculator/>
        </Modal>
      </div>

      <div>{children}</div>
    </>
  );
};

export default FilterDiv;
