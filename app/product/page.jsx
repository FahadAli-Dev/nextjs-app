// import Link from "next/link";

// const Product = async ({ searchParams }) => {
//   const searchParam = await searchParams;
//   const URL = `https://dummyjson.com/products`;
//   const response = await fetch(URL);
//   const data = await response.json();
//   const finalData = data.products;

//   console.log(finalData);
//   console.log(searchParam);
//   return (
//     <div className="text-center mt-[10px]">
//       {finalData.map((item, idx) => {
//         return (
//           <div key={idx}>
//             <p></p>
//           </div>
//         );
//       })}

//       {/* <div className="flex gap-[20px] justify-center">
//         <Link href={"/product?category=shoes&price=100"}>shoes</Link>
//         <Link href={"/product?category=cloths&price=200"}>cloths</Link>
//       </div>
//       <p>category: {searchParam.category}</p>
//       <p>price: {searchParam.price}</p> */}
//     </div>
//   );
// };

// export default Product;

// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// // Dummy data
// const allProducts = [
//   { id: 1, name: "Nike Air Max", category: "shoes", price: 150 },
//   { id: 2, name: "Puma Runner", category: "shoes", price: 120 },
//   { id: 3, name: "Levi's Jeans", category: "clothing", price: 95 },
//   { id: 4, name: "Adidas Hoodie", category: "clothing", price: 80 },
// ];

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [filtered, setFiltered] = useState([]);

//   // Step 1: Get values from searchParams
//   const category = searchParams.get("category") || "all";
//   const sort = searchParams.get("sort") || "asc";

//   // Step 2: Filter & Sort Products
//   useEffect(() => {
//     let products =
//       category === "all"
//         ? allProducts
//         : allProducts.filter((p) => p.category === category);

//     products.sort((a, b) =>
//       sort === "desc" ? b.price - a.price : a.price - b.price
//     );

//     setFiltered(products);
//   }, [category, sort]);

//   // Step 3: Handle dropdown changes
//   const updateParam = (key, value) => {
//     const newParams = new URLSearchParams(searchParams.toString());
//     newParams.set(key, value);
//     router.push(`/products?${newParams.toString()}`);
//   };

//   return (
//     <div className="p-6 font-sans">
//       <h1 className="text-2xl font-bold mb-4">🛍️ Product Listing</h1>

//       {/* Step 4: Filters */}
//       <div className="flex gap-4 mb-6">
//         <select
//           defaultValue={category}
//           onChange={(e) => updateParam("category", e.target.value)}
//         >
//           <option value="all">All Categories</option>
//           <option value="shoes">Shoes</option>
//           <option value="clothing">Clothing</option>
//         </select>

//         <select
//           defaultValue={sort}
//           onChange={(e) => updateParam("sort", e.target.value)}
//         >
//           <option value="asc">Price Low → High</option>
//           <option value="desc">Price High → Low</option>
//         </select>
//       </div>

//       {/* Step 5: Render Filtered Products */}
//       {filtered.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <ul className="space-y-2">
//           {filtered.map((product) => (
//             <li key={product.id}>
//               <strong>{product.name}</strong> — ${product.price}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

const Product = async ({ searchParams }) => {
  const searchParam = await searchParams;
  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || "1";

  console.log(searchParam);
  return <div>{`Showing ${category} sorted by ${sort} page${page}`}</div>;
};

export default Product;
