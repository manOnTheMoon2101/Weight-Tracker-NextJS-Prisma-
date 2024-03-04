"use client";

import styles from "./navbar.module.css";
import { BsFileBarGraph } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { IoIosCalculator } from "react-icons/io";

export default function Navbar() {
  return (
    <div className={styles.navDiv}>
      <ul>
        <li>
          <Link href='/' className={styles.linkColor}>
          Home
          <FaHome />
          </Link>
        </li>
        <li>
          <Link href={'/graphs'}  className={styles.linkColor}>
          Graphs
          <BsFileBarGraph />
          </Link>
        </li>
        
      </ul>
    </div>
  );
}
