import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Searchbox() {
  const [city, setcity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3de218914c45a36cc3d056ff9682bc1a";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    ); // creating a complete API URL
    let json_response = await response.json();
    // converting response into JSON formate

    let result = {
      // creating new simplified json from api returned json as it is bit messy and complex
      temp: json_response.main.temp,
      minTemp: json_response.main.temp_min,
      maxTemp: json_response.main.temp_max,
      humidity: json_response.main.humidity,
      feelslike: json_response.main.feels_like,
      weather: json_response.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setcity(event.target.value);
  };
  let handlesubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setcity("");
    getWeatherInfo();
  };

  return (
    <div className="flex flex-col items-center justify-evenly w-full h-[23vh] bg-zinc-700 ">
      <h3 className="text-zinc-400">Search for the weather.</h3>
      <form
        onSubmit={handlesubmit}
        className="flex flex-col items-center justify-evenly"
      >
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" type="submit">
          Contained
        </Button>
      </form>
    </div>
  );
}

export default Searchbox;
