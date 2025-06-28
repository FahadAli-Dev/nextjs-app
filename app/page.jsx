"use client";

import { useRouter } from "next/navigation";
import "./globals.css";

function page() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 mt-[200px] gap-[50px]">
      <h1>Well Come to Home Page</h1>
      <div className="flex gap-[50px] justify-center text-white">
        <button
          onClick={() => router.push("/user")}
          className="bg-blue-500 p-[10px_24px] font-bold rounded-[5px]"
        >
          I am User
        </button>
        <button
          onClick={() => router.push("/admin")}
          className="bg-blue-500 p-[10px_24px] font-bold rounded-[5px]"
        >
          I am Admin
        </button>
      </div>
    </div>
  );
}

export default page;
