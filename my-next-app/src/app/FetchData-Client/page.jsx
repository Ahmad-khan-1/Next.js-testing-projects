"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function FetchingDataInClientComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
      );
      const data = await res.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {data.map(({ id, title, body }) => (
        <div className={styles.card} key={id}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.body}>{body}</p>
        </div>
      ))}
    </div>
  );
}
