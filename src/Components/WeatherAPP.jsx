import React, { useState } from "react"; //this app jons show info and searchbox components
import Searchbox from "./Searchbox";
import Showinfo from "./Showinfo";

function WeatherAPP() {
  const [weatherinfo, setweatherinfo] = useState({
    city: "Delhi",
    feelslike: 37.79,
    humidity: 55,
    maxTemp: 32.99,
    minTemp: 30.94,
    temp: 32.99,
    weather: "smoke",
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
