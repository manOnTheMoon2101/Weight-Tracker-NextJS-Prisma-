"use client";


import React from 'react'
import { useState } from 'react'
function Calculator() {
    const [weight, setWeight] = useState<number | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [bmi, setBMI] = useState<number | null>(null);
  
    const calculateBMI = () => {
      if (!weight || !height) return;
      const heightMeters = height / 100;
      const bmiValue = weight / (heightMeters * heightMeters);
      setBMI(Number(bmiValue.toFixed(2)));
    };


    
 if(bmi! >= 30){
  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi}
      <p>OverWeight</p>
 
    </div>
  )
 }

 if(bmi! >= 20 && bmi! <= 30){
  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi}
      <p>Healthy Weight</p>
 
    </div>
  )
 }
 if(bmi! >= 0 && bmi! <= 20){
  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi}
      <p>Skinny Bitch</p>
 
    </div>
  )
 }

if(bmi == null){
  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
     
   
 
    </div>
  )
}
}

export default Calculator