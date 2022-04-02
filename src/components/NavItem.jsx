import React, { useState } from "react";

export default function NavItem({ Icon, text, isActive }) {
  //   const [isActive, setActive] = useState(false);
  //   const handleClick = () => {
  //     setActive(true)
  //   };
  return (
    <li      
      className={`flex cursor-pointer ${
        isActive ? "text-gray-200" : "text-gray-400"
      } items-center font-normal`}
    >
      <Icon className="h-5 w-5 " />
      <span className="ml-5">{text}</span>
    </li>
  );
}
