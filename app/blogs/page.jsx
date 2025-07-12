import React from "react";
import data from "../data/blogsDetail.json";
import Link from "next/link";

function page() {
  return (
    <div className=" w-[900px] m-[20px_auto_20px_auto] grid grid-cols-3 gap-[30px] ">
      {data.map((item, idx) => {
        return (
          <div className="shadow-lg p-[20px] grid gap-[10px]" key={idx}>
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.body}</p>
            <Link href={`/blogs/${item.id}`}>
              <button className="btn">deital</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default page;
