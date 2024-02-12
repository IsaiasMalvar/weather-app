import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { WeatherData } from "./types";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);

  /*   const getUp = useCallback(async (): Promise<WeatherData> => {
    try {
      const { data } = await axios.get<WeatherData>(
        "https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=7e2cdf69e80946234a36293330bc8534&cnt=40"
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

  return <></>;
}

export default App;
