import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white p-[20px]">
      <ul className="flex justify-center gap-[20px] font-[600]">
        <li>
          <Link href="/update">Update</Link>
        </li>
        <li>
          <Link href="/edit">Edit</Link>
        </li>
        <li>
          <Link href="/delete">Delete</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
