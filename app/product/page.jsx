const Product = async ({ searchParams }) => {
  let data = await searchParams;
  console.log(data);
  return (
    <div className="text-center mt-[10px]">
      <h1>search params</h1>
    </div>
  );
};

export default Product;
