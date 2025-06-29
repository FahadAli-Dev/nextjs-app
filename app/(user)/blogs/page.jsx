import React from "react";
import blogsData from "../data/blogsData.json";
import Link from "next/link";

function Blogs() {
  return (
    <div className="grid grid-cols-4 gap-[40px] w-[1300px] mx-auto mt-[40px] mb-[100px]">
      {blogsData.map((item, idx) => {
        return <Card item={item} key={idx} />;
      })}
    </div>
  );
}

export default Blogs;

const Card = ({ item }) => {
  return (
    <div id="card" className="shadow-lg p-[30px] flex flex-col gap-[20px]">
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <Link href={`/blogs/${item.url}`}>
        <button className="bg-blue-600 font-semibold text-white p-[7px_20px] rounded-[5px] cursor-pointer">
          Detail
        </button>
      </Link>
    </div>
  );
};
