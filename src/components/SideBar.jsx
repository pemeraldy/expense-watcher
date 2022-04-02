import React from "react";
import NavItem from "./NavItem";
export default function SideBar() {
  return (
    <div className="w-full  h-full relative md:p-11">
      <a href="#" className="block text-gray-200 mb-10">
        Logo
      </a>
      <ul className=" space-y-10">
        <NavItem />
        <NavItem />
      </ul>
      <div className="absolute bottom-10 flex flex-col">
        <NavItem className="block " />
        <div className="flex cursor-pointer items-center mt-10">
          <div className=" w-10 h-10 bg-white rounded-full"></div>
          <div className="text-white ml-4">
            <span className="block">Yope</span>
            <span className="block">Yopee@mail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
