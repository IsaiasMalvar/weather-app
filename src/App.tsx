import { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import { WeatherData } from "./types";
import { WeatherContext } from "./contexts/WeatherC";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const apiUrl = import.meta.env.VITE_API_ID;
  const { wordT, changeT, weatherData, isLoading } = useContext(WeatherContext);
  console.log(apiUrl);

  /*   const getUp = useCallback(async (): Promise<WeatherData> => {
    try {
      const { data } = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=${apiUrl}&cnt=40`
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await getUp();
        console.log(data);
      } catch (error) {
        // Handle errors if necessary
      }
    })();
  }, [getUp]); */

  return isLoading ? (
    <div className="text-[2000px]">LOADING</div>
  ) : (
    <>
      {wordT}
      <div onClick={changeT}>X</div>
      <div>{weatherData?.cod}</div>
    </>
  );
}

export default App;
