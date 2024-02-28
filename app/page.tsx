"use client";
import List from "./components/dataList/dataList";
import styles from "./page.module.css";
import { IoMdRefresh } from "react-icons/io";
import { IoIosCalculator } from "react-icons/io";
export default function Home() {
  return (
    <main style={{ clear: "both" }}>
      <div className={styles.filterDiv}>
        <select>
          <option>March</option>
          <option>April</option>
        </select>

        <select>
          <option>Gained Weight</option>
          <option>Lost Weight</option>
        </select>
        <button>
          {" "}
          BMI Calculator
          <IoIosCalculator />
        </button>
        <button className={styles.refreshButton}>
          <IoMdRefresh />
        </button>
      </div>

      <List />
    </main>
  );
}
