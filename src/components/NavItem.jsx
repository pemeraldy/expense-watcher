import React, { useState } from "react";
import { BeakerIcon } from "@heroicons/react/solid";

export default function NavItem() {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(true)
  };
  return (
    <li
      onClick={handleClick}
      className={`flex cursor-pointer ${
        isActive ? "text-gray-300" : "text-gray-600"
      } items-center font-normal`}
    >
      <BeakerIcon className="h-5 w-5 " />
      <span className="ml-5">Home</span>
    </li>
  );
}
