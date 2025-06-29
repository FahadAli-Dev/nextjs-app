"use client";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

const RootLayout = ({ children }) => {
  const [rol, setRol] = useState(true);
  return (
    <html lang="en">
      <body>
        {children}
        <Link href={`${rol ? "/update" : "/"}`}>
          <button
            onClick={() => setRol(!rol)}
            className="bg-blue-500 p-[10px_25px] font-semibold rounded-[5px] text-white absolute top-[88px] right-[80px]"
          >
            {rol ? "Admin" : "User"}
          </button>
        </Link>
      </body>
    </html>
  );
};

export default RootLayout;
