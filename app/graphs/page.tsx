"use client";

import useSWR from "swr";
import React from "react";
import FilterDiv from "../components/FilterButtons/filterDiv";
import CustomGraphs from "../components/customGraphs/graphs";

export default function Graphs() {
  return (
    <main style={{ clear: "both" }}>
      <FilterDiv>
        <CustomGraphs />
      </FilterDiv>
    </main>
  );
}
