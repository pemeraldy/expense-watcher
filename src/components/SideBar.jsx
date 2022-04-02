import React from "react";
import NavItem from "./NavItem";
import { BeakerIcon, LogoutIcon, CreditCardIcon, CogIcon, UserIcon, ClipboardCheckIcon } from "@heroicons/react/solid";

export default function SideBar() {
  return (
    <div className="w-full  h-full relative md:p-11">
      <a href="#" className="block text-gray-200 mb-20">
        Logo
      </a>
      <ul className=" space-y-10">
        <NavItem Icon={BeakerIcon} isActive={true} text="home" />
        <NavItem Icon={CreditCardIcon} text="Card" />
        <NavItem Icon={ClipboardCheckIcon} text="Payment" />
        <NavItem Icon={UserIcon} text="Account" />
        <NavItem Icon={CogIcon} text="Settings" />
      </ul>
      <div className="absolute bottom-10 flex flex-col">
        <NavItem Icon={LogoutIcon} text="Logout" className="block" />
        <div className="flex cursor-pointer items-center mt-10">
          <div className=" w-10 h-10 bg-white rounded-full"></div>
          <div className="text-gray-400 hover:text-gray-50 ml-4">
            <span className="block">Yope</span>
            <span className="block">Yopee@mail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
