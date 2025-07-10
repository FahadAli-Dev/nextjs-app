"use client";

import { useState } from "react";
import Counter from "./counter";

const page = () => {
  let [detail, setDetail] = useState("nothing");

  let fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let response = await data.json();
    alert(response.title);
  };

  let handlerClick = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let response = await data.json();
    setDetail(response.body);
  };
  return (
    <div className="text-center pt-[20px] grid grid-cols-1 gap-[10px]">
      <h1 className="font-bold text-[20px]">Fetch Data in Clinet Component</h1>
      <div className="flex justify-center gap-[30px]">
        <button
          onClick={() => {
            fetchData();
          }}
          className="btn"
        >
          Check
        </button>
        <button
          onClick={() => {
            handlerClick();
          }}
          className="btn"
        >
          See
        </button>
        <Counter />
      </div>
      <p>{detail}</p>
    </div>
  );
};

export default page;
