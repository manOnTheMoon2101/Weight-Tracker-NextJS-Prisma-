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
import React from "react";
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

  const { data, error, isLoading } = useSWR(`/api/data/`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div><ThreeDots
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
          labels: data.map((x: any) => x.date),

          datasets: [
            {
              label: "Weight",

              data: data.map((x: any) => x.weight),

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

export default CustomGraphs;
