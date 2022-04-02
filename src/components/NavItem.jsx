import React, { useState } from "react";

export default function NavItem({ Icon, text, isActive }) {
  //   const [isActive, setActive] = useState(false);
  //   const handleClick = () => {
  //     setActive(true)
  //   };
  return (
    <li      
      className={`flex cursor-pointer ${
        isActive ? "text-gray-300" : "text-gray-600"
      } items-center font-normal`}
    >
      <Icon className="h-5 w-5 " />
      <span className="ml-5">{text}</span>
    </li>
  );
}
