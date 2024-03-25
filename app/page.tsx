import List from "./components/dataList/dataList";
import styles from "./page.module.css";

import FilterDiv from "./components/FilterButtons/filterDiv";

export default function Home() {
  return (
    <main style={{ clear: "both" }}>
      <FilterDiv>
        <List/>
      </FilterDiv>
    </main>
  );
}
