"use client";

import React from 'react'
import { useState } from 'react';
const Form = () =>{

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    return(
        <>
        <form>
        <input placeholder='Date'/>
        <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>Lost Weight?</label>
     
        <input placeholder='Weight'/>
        <input placeholder='Workout Days'/>
        <input placeholder='Info'/>
 
        </form>


        </>
    )

}


export default Form