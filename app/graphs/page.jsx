"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Filler,
  Title,
} from "chart.js";

import { useCallback, useRef } from "react";
import { Line } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title
);

async function getData() {
  const data = await fetch("http://localhost:3000/api/data");
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

async function Graphs() {
  const ref = useRef(null);
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getUTCDate();
  const year = date.getFullYear();
  const downLoad = useCallback(() => {
    const link = document.createElement("a");
    link.download = `${day} ${month} ${year}`;
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  const dataM = await getData();
  return (
    <div style={{ clear: "both" }}>
      <button onClick={downLoad}>Download Graph</button>

      <Line
        ref={ref}
        width={700}
        height={400}
        options={{
          responsive: false,

          scales: {
            x: {
              ticks: { color: "black" },
            },
          },

          plugins: {},
        }}
        data={{
          labels: dataM.map((x) => x.date),

          datasets: [
            {
              label: "Weight",

              data: dataM.map((x) => x.weight),

              backgroundColor: "#B84346",
              hoverBackgroundColor: "rgb(255, 99, 132)",
              borderWidth: 4,
              fill: true,
              borderColor: "#C6A969",
              pointBorderColor: "#111",
              pointBackgroundColor: "#B84346",
              pointBorderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
}

export default Graphs;
