"use client";

import { useState, useEffect } from "react";

const ClientComponet = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const postData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      console.log(data);

      setFetchData(data);

      return data;
    };
    postData();
  }, []);
  return (
    <div>
      <h1>Client Component</h1>
      <ul>
        {fetchData.map((item, index) => {
          return <li key={index}>{item.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default ClientComponet;
