import ProductList from "./productlist";

const Product = async ({ searchParams }) => {
  const searchParam = await searchParams;
  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || "1";

  console.log(searchParam);
  return (
    <div>
      {`Showing ${category} sorted by ${sort} page${page}`}
      <ProductList />
    </div>
  );
};

export default Product;
