"use client";
import { ReactNode, useState } from "react";
import React from "react";

interface MyComponentProps {
  children: ReactNode;
  data:any
}

const FilterWrap: React.FC<MyComponentProps> = ({ children ,data }) => {
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h2>Client</h2>
      {data}
      {children}
    </div>
  );
};

export default FilterWrap;
