import styles from "./list.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";

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
                  <h3>
                    Date
                   
                  </h3>

                  <p> {x.date}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>
                    Weight(kg)
             
                  </h3>
                  <p> {x.weight}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>
                   Weight Progress
                 
                  </h3>
                  <p color="#B84346">
                    <FaAngleDoubleUp color="red" />
                  </p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>
                    Workout Days
                  
                  </h3>
                  <p>{x.daysWorkedOut}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>
                    Info
        
                  </h3>
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
                  <h3>
                    Date
         
                  </h3>

                  <p> {x.date}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>
                    Weight(kg)
            
                  </h3>
                  <p> {x.weight}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>
                   Weight Progress
                 
                  </h3>
                  <p color="#B84346">
                    <FaAngleDoubleDown color="lime" />
                  </p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>
                    Workout Days
                
                  </h3>
                  <p>{x.daysWorkedOut}</p>
                </div>

                <div style={{ width: "16%" }}>
                  <h3>
                    Info
                 
                  </h3>
                  <p> {x.extraInfo}</p>
                </div>

                <FormControl  id={x.id} />
      
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
