// Write dynamic route in client componet.
/* "use client";
import { useEffect, useState } from "react";
import data from "../../data/blogsDetail.json";

function page({ params }) {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const getParams = async () => {
      let { blogsInfo } = await params;
      let finalData = data.filter((item) => item.id == blogsInfo)[0];
      setDetail(finalData);
    };
    getParams();
  }, []);

  return (
    <div className="w-[900px] m-[20px_auto_0px_auto] grid gap-[10px]">
      <h1 className="font-bold">
        {detail.id} - {detail.title}
      </h1>
      <p>{detail.body}</p>
    </div>
  );
} 

export default page; */

// Write dynamic route in client or server component.
"use client";
import React, { use } from "react";
import data from "../../data/blogsDetail.json";

function page({ params }) {
  const { blogsInfo } = use(params);
  let finalData = data.filter((item) => item.id == blogsInfo)[0];

  return (
    <div className="w-[900px] m-[20px_auto_0px_auto] grid gap-[10px]">
      <h1 className="font-bold">
        {finalData.id} - {finalData.title}
      </h1>
      <p>{finalData.body}</p>
    </div>
  );
}

export default page;

// Write dynamic route in server component.
/* import React from "react";
import data from "../../data/blogsDetail.json";

async function page({ params }) {
  const { blogsInfo } = await params;
  let finalData = data.filter((item) => item.id == blogsInfo)[0];

  return (
    <div className="w-[900px] m-[20px_auto_0px_auto] grid gap-[10px]">
      <h1 className="font-bold">
        {finalData.id} - {finalData.title}
      </h1>
      <p>{finalData.body}</p>
    </div>
  );
}

export default page; */
