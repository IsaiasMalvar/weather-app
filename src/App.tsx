import { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import { WeatherData } from "./types";
import { WeatherContext } from "./contexts/WeatherC";
import NavBar from "./components/NavBar";

function App() {
  const apiUrl = import.meta.env.VITE_API_ID;
  const { clearError, isLoading } = useContext(WeatherContext);
  console.log(isLoading);

  return (
    <>
      {!isLoading ? (
        <div
          className="min-h-screen bg-gradient-to-br from-[#00ffbc]  to-[#e98c11]"
          onClick={clearError}
        >
          <NavBar />
          <a onClick={() => console.log("hi")}>X</a>
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
}

export default App;
