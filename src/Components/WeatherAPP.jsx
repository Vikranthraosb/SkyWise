import React, { useState } from "react"; //this app jons show info and searchbox components
import Searchbox from "./Searchbox";
import Showinfo from "./Showinfo";

function WeatherAPP() {
  const [weatherinfo, setweatherinfo] = useState({
    city: "____",
    feelslike: 0,
    humidity: 0,
    maxTemp: 0,
    minTemp: 0,
    temp: 0,
    weather: "____",
  });

  let updateInfo = (newinfo) => {
    setweatherinfo(newinfo);
  };
  return (
    <div>
      <Searchbox updateInfo={updateInfo} />
      <Showinfo info={weatherinfo} />
    </div>
  );
}

export default WeatherAPP;
