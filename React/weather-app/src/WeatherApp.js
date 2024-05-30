// src/WeatherApp.js
import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "0443f6d00a7cb0c064d427a0fc0b4f82";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const getWeatherData = () => {
    axios
      .get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
        setWeatherData(null);
        alert('please enter valid city name');
      });
  };

  return (
    
    <div>

      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button onClick={getWeatherData}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
