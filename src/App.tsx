import { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import { WeatherData } from "./types";
import { WeatherContext } from "./contexts/WeatherC";
import NavBar from "./components/NavBar";
import CurrentTimeWeather from "./components/CurrentTimeWeather";
import CurrentDayWeather from "./components/CurrentDayWeather";

function App() {
  const apiUrl = import.meta.env.VITE_API_ID;
  const { clearError, isLoading } = useContext(WeatherContext);
  console.log(isLoading);

  return (
    <>
      {!isLoading ? (
        <div
          className="min-h-screen bg-gradient-to-br from-[#00ffbc]  to-[#e98c11] p-10"
          onClick={clearError}
        >
          <NavBar />
          <CurrentTimeWeather />
          <CurrentDayWeather />
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
}

export default App;
