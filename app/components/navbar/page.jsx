import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="bg-black text-white font-semibold py-[20px] flex justify-center gap-[30px]">
        <Link href={"/"}>Home</Link>
        <Link href={"/servercomp"}>ServerComp</Link>
        <Link href={"/clientcomponent"}>ClientComp</Link>
        <Link href={"/useapipractice"}>use</Link>
        <Link href={"/blogs"}>Blogs(use)</Link>
      </ul>
    </div>
  );
};

export default Navbar;
