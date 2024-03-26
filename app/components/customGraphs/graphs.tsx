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
import { ThreeDots } from "react-loader-spinner";
import { useCallback, useRef } from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import React from "react";
import styles from "./graph.module.css";
import useSWR from "swr";
ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title
);

function CustomGraphs() {
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

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [selectedOption, setSelectedOption] = useState(3);

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const { data, error, isLoading } = useSWR(
    `/api/date/${selectedOption}`,
    fetcher
  );
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
    <div style={{ clear: "both" }}>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className={styles.monthSelect}
      >
        <option value="3">March</option>
        <option value="4">April</option>
      </select>

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
          labels: data.map((x: any) => x.date),

          datasets: [
            {
              label: "Weight",

              data: data.map((x: any) => x.weight),

              backgroundColor: "#597E52",
              hoverBackgroundColor: "rgb(255, 99, 132)",
              borderWidth: 5,
              fill: true,
              borderColor: "#B84346",
              pointBorderColor: "#111",
              pointBackgroundColor: "white",
              pointBorderWidth: 2,
            },
          ],
        }}
      />
      <button onClick={downLoad} className={styles.downButton}>
        Download Graph
      </button>
    </div>
  );
}

export default CustomGraphs;
