"use client";

import React from "react";
import styles from "./form.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Modal from "../modal/modal";
import { toast } from "react-toastify";
import useSWR from "swr";
import FormEditForm from "../editForm/Form";
import { ThreeDots } from "react-loader-spinner";

import "react-toastify/dist/ReactToastify.css";

function FormControl(id: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [postToEdit, setPostToEdit] = useState(id);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

  const router = useRouter();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`/api/data/${id.id}`, fetcher);

  const handleEditPost = (e: any) => {
    e.preventDefault();
    axios
      .patch(`/api/posts/${id}`, postToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
      });
  };

  const handleDeletePost = (id: any) => {
    axios
      .delete(`/api/data/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        toast.error("Deleted Succesfully!",{
          
        });
        router.refresh();
      });
  };

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="black"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  return (
    <>
      <div className={styles.buttonDiv}>
        <h3>Edit/Delete</h3>

        <button onClick={toggleModal}>
          <MdEdit color="#606C38" />
        </button>
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
          <FormEditForm id={id.id} />
        </Modal>

        <button onClick={toggleModal2}>
          <MdDelete color="#B84346" />
        </button>
        <Modal isOpen={isModalOpen2} toggleModal={toggleModal2}>
          <p>Are you sure?</p>
          <button onClick={() => handleDeletePost(id.id)}>Yes</button>
          <button onClick={toggleModal2}>No</button>
        </Modal>
      </div>
    </>
  );
}

export default FormControl;
