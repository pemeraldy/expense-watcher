import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";


function App() {  
  return (
    <div className="flex  h-screen">
      <div className=" h-full  md:w-[20%] bg-black">
        <SideBar />
      </div>
      <div className=" h-full md:w-[25%] bg-gray-50 border-r border-gray-300"></div>
      <div className=" flex-1 h-full bg-gray-50"></div>
    </div>
  );
}

export default App;
