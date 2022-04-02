import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";


function App() {  
  return (
    <div className="flex  h-screen">
      <div className=" h-full  md:w-[20%] bg-black">
        <SideBar />
      </div>
      <div className=" h-full md:w-[30%] bg-gray-300"></div>
      <div className=" flex-1 h-full bg-gray-600"></div>
    </div>
  );
}

export default App;
