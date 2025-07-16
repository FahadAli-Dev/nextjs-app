"use client";

import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParam = useSearchParams();
  const category = searchParam.get("category");
  const sort = searchParam.get("sort");
  const page = searchParam.getAll("page");

  console.log(searchParam);
  console.log(category);
  console.log(sort);
  console.log(page);
  return <div>useSearchParams</div>;
};
export default ProductList;
