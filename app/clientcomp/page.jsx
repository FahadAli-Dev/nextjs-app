"use client";

import { useState } from "react";
import Counter from "../clientcomponent/counter";

const Button = ({ response }) => {
  let [des, setDes] = useState("nothing");

  return (
    <div>
      <button
        className="btn m-[20px]"
        onClick={() => {
          alert(`title: ${response.title}`);
        }}
      >
        check
      </button>
      <button
        className="btn m-[20px]"
        onClick={() => {
          setDes(response.body);
        }}
      >
        see
      </button>
      <Counter />
      <p>{des}</p>
    </div>
  );
};
export default Button;
