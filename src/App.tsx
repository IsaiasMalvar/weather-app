import { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import { WeatherData } from "./types";
import { WeatherContext } from "./contexts/WeatherC";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const apiUrl = import.meta.env.VITE_API_ID;
  const { handleInputChange } = useContext(WeatherContext);
  console.log(apiUrl);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#00ffbc]  to-[#e98c11]">
        <NavBar />
      </div>
    </>
  );
}

export default App;
