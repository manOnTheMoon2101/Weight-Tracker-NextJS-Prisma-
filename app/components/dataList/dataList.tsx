'use client'

import styles from './list.module.css';


async function getData() {

    const res = await fetch("http://localhost:3000/api/data",{cache:'no-cache'});
  
    if(!res.ok){
      throw new Error("Failed to get Data")
    }
    else{
      return res.json()
    }
    
  }
  




export default async function List(){
    const data = await getData();
return(
    <div className={styles.mainDiv}>
    <h3>Date</h3>
    {data.map((x:any) => x.date)}
    <h3>Weight</h3>
    {data.map((x:any) => x.weight)}
    <h3>Lost Weight?</h3>
    {data.map((x:any) => x.loseWeight)}

    <h3>Calories Consumed</h3>
    {data.map((x:any) => x.caloriesConsumed)}
    <h3>Calories Burned</h3>
    {data.map((x:any) => x.caloriesBurned)}
    <h3>Notes</h3>
    {data.map((x:any) => x.extraInfo)}
    </div>
)


}