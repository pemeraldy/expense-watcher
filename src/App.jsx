import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex  h-screen">
      <div className=" h-full  md:w-[278px] bg-black"></div>
      <div className=" h-full md:w-[402px] bg-gray-300"></div>
      <div className=" flex-1 h-full bg-gray-600"></div>
    </div>
  );
}

export default App;
