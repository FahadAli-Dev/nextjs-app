"use client";

import { useRouter } from "next/navigation";
import "./globals.css";
import Navbar from "./components/UserNavbar";

function page() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 mt-[20px] gap-[10px]">
        <h1>Home</h1>
        <p>
          Home Page Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Rem laborum vel consequuntur ipsa quisquam suscipit doloribus
          voluptates veniam maxime adipisci ducimus, repellendus in doloremque,
          atque corrupti? Labore repellendus quis architecto? Similique,
          dolorem! Nihil cumque, iste unde quis doloremque, sint repudiandae
          quos laboriosam minima deserunt ipsa, id recusandae omnis magni
          voluptates ad corporis commodi. Tempore asperiores libero, at porro
          facilis vitae. Ullam, tenetur soluta, nobis quo ipsa saepe in dolores
          modi provident vero eveniet! Eligendi fugit perferendis consequuntur
          aliquam ducimus ut eius a! Quos blanditiis quo, expedita vitae quod
          porro repudiandae. Debitis et dicta commodi molestiae. Quisquam
          placeat odit asperiores suscipit distinctio ipsam earum est non
          ducimus temporibus iste consectetur iure amet nisi animi similique
          dolores, laborum ab repellendus autem tempore. Voluptatibus ex iure
          accusantium soluta harum dicta cupiditate aspernatur doloremque,
          commodi reprehenderit sapiente, ipsa, deserunt quam doloribus totam
          nostrum nobis dolor consectetur dignissimos alias aut. Numquam optio
          voluptatum ut ex?
        </p>
      </div>
    </div>
  );
}

export default page;
