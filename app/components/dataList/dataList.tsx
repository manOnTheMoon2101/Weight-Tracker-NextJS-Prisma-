"use client";

import styles from "./list.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import useSWR from "swr";
import FormControl from "../formControl/FormControl";
import Modal from "../modal/modal";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
export default function List() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { data, error, isLoading } = useSWR(`/api/data/`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div style={{textAlign:'center'}}> <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="black"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
/></div>;

  return (
    <div className={styles.mainDiv}>
      {data.map((x: any) => {
        if (x.loseWeight == false) {
          return (
            <>
              <div className={styles.box}>
                <div style={{ width: "16%" }}>
                  <h3>Date</h3>

                  <p> {x.date}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Weight(kg)</h3>
                  <p> {x.weight}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Weight Progress</h3>
                  <p color="#B84346">
                    <FaAngleDoubleUp color="red" />
                  </p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Workout Days</h3>
                  <p>{x.daysWorkedOut}</p>
                </div>

                <div className={styles.infoDiv}>
                  <h3>Info</h3>

                  <p> {x.extraInfo}</p>
                </div>

                <FormControl id={x.id} />
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className={styles.box}>
                <div style={{ width: "16%" }}>
                  <h3>Date</h3>

                  <p> {x.date}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Weight(kg)</h3>
                  <p> {x.weight}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Weight Progress</h3>
                  <p color="#B84346">
                    <FaAngleDoubleDown color="lime" />
                  </p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Workout Days</h3>
                  <p>{x.daysWorkedOut}</p>
                </div>

                <div className={styles.infoDiv}>
                  <h3>Info</h3>

                  <p>{x.extraInfo}</p>
                </div>

                <FormControl id={x.id} />
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
