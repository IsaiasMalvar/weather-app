import { createContext, useCallback, useEffect, useState } from "react";
import { WeatherContext } from "./WeatherC";
import { WeatherData, WeatherDetail } from "../types";
import axios from "axios";

export const WeatherProvider = ({ children }: any) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [place, setPlace] = useState<string>("Tenerife");

  const [wordT, setWordT] = useState<string>("null");
  const [weatherData, setWeatherData] = useState<WeatherData>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_ID;

  let a;

  const handleInputChange = async (value: string) => {
    setCity(value);
    if (value.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${apiUrl}`
        );

        const suggestions = response.data.list.map((item: any) => item.name);
        setSuggestions(suggestions);
        setError("");
        setShowSuggestions(true);
      } catch (error) {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (value: string) => {
    setCity(value);
    setShowSuggestions(false);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (suggestions.length == 0) {
      setError("Location not found");
      setIsLoading(false);
    } else {
      setError("");
      setTimeout(() => {
        setIsLoading(false);
        setPlace(city);
        setShowSuggestions(false);
      }, 500);
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (postiion) => {
        const { latitude, longitude } = postiion.coords;
        try {
          setIsLoading(true);
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiUrl}`
          );
          setTimeout(() => {
            setIsLoading(false);
            setPlace(response.data.name);
          }, 500);
        } catch (error) {
          setIsLoading(false);
        }
      });
    }
  };

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
      value={{
        weatherData,
        isLoading,
        handleCurrentLocation,
        handleInputChange,
        handleSubmitSearch,
        handleSuggestionClick,
        city,
        error,
        suggestions,
        showSuggestions,
        place,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
