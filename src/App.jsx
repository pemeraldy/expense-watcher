import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SideBar from "./components/SideBar";


function App() {  
  return (
    <div className="flex  h-screen">
      <div className=" hidden md:block h-full md:w-[20%] bg-black">
        <SideBar />
      </div>
      <div className=" md:p-11 h-full md:w-[28%] bg-gray-50 sm:border-r-2 border-gray-200">
        <h1 className="font-bold text-2xl mb-[50px]">Card List</h1>
        <CardList />
      </div>
      <div className=" flex-1 h-full bg-gray-50"></div>
    </div>
  );
}

export default App;
