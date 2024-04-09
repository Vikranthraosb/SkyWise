import React from "react";
import WeatherAPP from "./Components/WeatherAPP";
import Button from "@mui/material/Button";
import Searchbox from "./Components/Searchbox";
import Showinfo from "./Components/Showinfo";
function App() {
  return (
    <>
      <div className="bg-zinc-300 min-h-screen	max-w-[100vw] overflow-hidden p-2 ">
        <WeatherAPP />
      </div>
    </>
  );
}

export default App;
