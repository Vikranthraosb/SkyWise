import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TurnedInTwoTone } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Searchbox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [alertError, setAlertError] = useState(true);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3de218914c45a36cc3d056ff9682bc1a";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const json_response = await response.json();

      const result = {
        city: city,
        temp: json_response.main.temp,
        minTemp: json_response.main.temp_min,
        maxTemp: json_response.main.temp_max,
        humidity: json_response.main.humidity,
        feelslike: json_response.main.feels_like,
        weather: json_response.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      await getWeatherInfo();
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
      setAlertError(true); // Display the alert on error
    }
  };

  const handleCloseAlert = () => {
    setAlertError(false);
  };

  return (
    <div className="flex flex-col items-center justify-evenly w-full h-[23vh] bg-zinc-700 ">
      <h3 className="text-zinc-400">Search for the weather.</h3>
      <form
        onSubmit={handleSubmit}
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
          Search
        </Button>
        {alertError &&
          error && ( // Render the Alert component conditionally
            <Stack
              sx={{ width: "100%", position: "fixed", top: 0, zIndex: 9999 }}
              spacing={2}
            >
              <Alert
                severity="warning"
                onClose={handleCloseAlert}
                sx={{ width: "100%", color: "red" }}
              >
                Enter Proper City Name !!
              </Alert>
            </Stack>
          )}
      </form>
    </div>
  );
}

export default Searchbox;
