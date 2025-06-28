import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white p-[20px]">
      <ul className="flex justify-center gap-[20px] font-[600]">
        <li>
          <Link href="/admin">Home</Link>
        </li>
        <li>
          <Link href="/aboutt">About</Link>
        </li>
        <li>
          <Link href="/edit">Adit</Link>
        </li>
        <li>
          <Link href="/delete">Delete</Link>
        </li>
        <li>
          <Link href="/update">Update</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
