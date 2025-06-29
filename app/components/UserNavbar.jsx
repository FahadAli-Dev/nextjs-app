import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white p-[20px]">
      <ul className="flex justify-center gap-[20px] font-[600]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
