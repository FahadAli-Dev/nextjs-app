import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <ul className="bg-black text-white flex gap-[30px] justify-center font-bold py-[15px]">
        <Link href={"/"}>Home</Link>
        <Link href={"/product"}>Product</Link>
      </ul>
    </div>
  );
};
export default Navbar;
