import Link from "next/link";

const Product = async ({ searchParams }) => {
  let searchParam = await searchParams;
  const URL = `https://dummyjson.com/products`;
  const response = await fetch(URL);
  const data = await response.json();
  const finalData = data.products;

  console.log(finalData);
  console.log(searchParam);
  return (
    <div className="text-center mt-[10px]">
      {finalData.map((item, idx) => {
        return (
          <div key={idx}>
            <p></p>
          </div>
        );
      })}

      {/* <div className="flex gap-[20px] justify-center">
        <Link href={"/product?category=shoes&price=100"}>shoes</Link>
        <Link href={"/product?category=cloths&price=200"}>cloths</Link>
      </div>
      <p>category: {searchParam.category}</p>
      <p>price: {searchParam.price}</p> */}
    </div>
  );
};

export default Product;
