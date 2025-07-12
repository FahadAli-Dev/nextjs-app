// fetch api in client component.
// "use client";
// import { useEffect, useState } from "react";
// const UseApiPractice = () => {
//   const [detail, setDetail] = useState({});
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((res) => res.json())
//       .then((data) => setDetail(data));
//   }, []);

//   return <div>{detail.body}</div>;
// };
// export default UseApiPractice;

// fetch api in client component.
"use client";
import { useEffect, useState } from "react";
const UseApiPractice = () => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      let finalData = await data.json();
      setDetail(finalData);
    };
    getData();
  }, []);
  return (
    <div className="w-[900px] m-[20px_auto_0px_auto] gride gap-[10px]">
      <h1 className="font-bold">{detail.title}</h1>
      <p>{detail.body}</p>
    </div>
  );
};
export default UseApiPractice;

// fetch api using use() api in client or server component.
// import { use } from "react";
// const UseApiPractice = () => {
//   const data = use(
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
//       res.json()
//     )
//   );
//   return (
//     <div className="w-[900px] m-[20px_auto_0px_auto] grid gap-[10px]">
//       <h1 className="font-bold">
//         {data.id} - {data.title}
//       </h1>
//       <p>{data.body}</p>
//     </div>
//   );
// };
// export default UseApiPractice;

// fetch api in server componet.
// const UseApiPractice = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let data = await response.json();

//   return (
//     <div className="w-[900px] m-[20px_auto_0px_auto] grid gap-[10px]">
//       <h1 className="font-bold">
//         {data.id} - {data.title}
//       </h1>
//       <p>{data.body}</p>
//     </div>
//   );
// };
// export default UseApiPractice;
