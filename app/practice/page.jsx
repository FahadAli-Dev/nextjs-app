"use client";

import { use } from "react";

const Practice = () => {
  let data = use(
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
      res.json()
    )
  );

  return <div>{data.body}</div>;
};

export default Practice;
