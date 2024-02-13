import { createContext, useCallback, useEffect, useState } from "react";
import { WeatherContext } from "./WeatherC";
import { WeatherData, WeatherDetail } from "../types";
import axios from "axios";

export const WeatherProvider = ({ children }: any) => {
  const apiUrl = import.meta.env.VITE_API_ID;
  const [wordT, setWordT] = useState<string>("null");
  const [weatherData, setWeatherData] = useState<WeatherData>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeW = useCallback(() => {
    setWordT("");
  }, []);

  const changeT = () => {
    setWordT("");
  };

  const changeX = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=${apiUrl}&cnt=40`
      );
      setWeatherData(data);
      setTimeout(() => setIsLoading(false), 5000);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  useEffect(() => {
    changeW();
    changeX();
  }, [changeW, changeX]);

  console.log(weatherData);

  return (
    <WeatherContext.Provider
      value={{ changeT, changeX, wordT, weatherData, isLoading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
