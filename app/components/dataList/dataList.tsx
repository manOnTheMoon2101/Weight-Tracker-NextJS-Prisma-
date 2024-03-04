

import styles from "./list.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaWeight } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import FormControl from "../formControl/FormControl";



async function getData() {
  const res = await fetch("http://localhost:3000/api/data", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to get Data");
  } else {
    return res.json();
  }
}

export default async function List() {
 
  const data = await getData();

  return (
    <div className={styles.mainDiv}>
      {data.map((x: any) => {
        if (x.loseWeight == false) {
          return (
            <>
              <div className={styles.box}>
           
                <div style={{ width: "16%" }}>
                  <h3>Date<MdDateRange/></h3>
                  
                  <p> {x.date}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Weight<FaWeight /></h3>
                  <p> {x.weight}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Lose Weight?<FaWeight /></h3>
                  <p color="#B84346"><FaAngleDoubleUp color="#B84346" /></p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>Workout Days<MdFoodBank /></h3>
                  <p>{x.daysWorkedOut}</p>
                </div>

                

                <div style={{ width: "16%" }}>
                  <h3>Info<FaInfoCircle /></h3>
                  <p> {x.extraInfo}</p>
                </div>

<FormControl/>
               
              </div>
            </>
          );
        }
        
        
        
        
        
        else {
          return (
            <>
              <div className={styles.box}>
                <div style={{ width: "20%" }}>
                  <p> {x.date}</p>
                </div>

                <div style={{ width: "20%" }}>
                  <p> {x.weight}</p>
                </div>

                <div style={{ width: "20%" }}>
                  <p><FaAngleDoubleDown color="#606C38"/></p>
                </div>

                <div style={{ width: "20%" }}>
                  <p>{x.daysWorkedOut}</p>
                </div>

               

                <div style={{ width: "20%" }}>
                  <p> {x.extraInfo}</p>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
