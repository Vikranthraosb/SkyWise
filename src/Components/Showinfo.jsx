import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";

function Showinfo({ info }) {
  //different photos for different weathers
  const NormalPhoto =
    "https://images.unsplash.com/photo-1691848746401-b40fdd5d823f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const Coldphoto =
    "https://images.unsplash.com/photo-1516431883659-655d41c09bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25vd2luZ3xlbnwwfHwwfHx8MA%3D%3D";
  const HotPhoto =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RainPhoto =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="flex flex-col justify-between items-center">
      <h1 className="m-4 text-cyan-500 text-xl font-semibold ">
        WEATHER IS ...
      </h1>
      <Card
        sx={{ maxWidth: 345 }}
        className="rounded-full border-green-500 border-2"
      >
        <CardMedia
          sx={{ height: 140 }}
          image={
            // showing images according to temperature and humidity
            info.humidity > 70
              ? RainPhoto
              : info.temp >= 35
              ? HotPhoto
              : info.temp <= 10
              ? Coldphoto
              : NormalPhoto
          }
          title="green iguana"
        />
        <CardContent className="flex flex-col items-center justify-around bg-green-300 p-3">
          <Typography gutterBottom variant="h5" component="div">
            <h1 className="text-3xl font-bold text-red-500">
              {info.city}
              {}
            </h1>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component={"span"}
            className="flex flex-col justify-around"
          >
            {/* it was giving error as we cannot put an P component inside another P component. so we made the component as Span */}
            <ul className="list-disc m-2 ml-6">
              <li className="text-lg font-semibold mb-1">
                Temperature = {info.temp}&deg;C
              </li>
              <li className="text-lg font-semibold mb-1">
                Humidity = {info.humidity}
              </li>
              <li className="text-lg font-semibold mb-1">
                Max Temp = {info.maxTemp}&deg;C
              </li>
              <li className="text-lg font-semibold mb-1">
                Min Temp = {info.minTemp}&deg;C
              </li>
              <li className="text-lg font-semibold mb-1">
                Weather is <i> {info.weather} </i>
                and feels like
                <i> {info.feelslike} </i>
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Showinfo;
