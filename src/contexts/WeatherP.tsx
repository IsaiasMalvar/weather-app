import { useCallback, useEffect, useState } from "react";
import { WeatherContext } from "./WeatherC";
import { WeatherData, WeatherSingleDetail } from "../types";
import axios from "axios";
import countries from "../assets/countries.json";

export const WeatherProvider = ({ children }: any) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [place, setPlace] = useState<string>("Tenerife");

  const [weatherData, setWeatherData] = useState<WeatherData>(undefined);
  const [firstHit, setFirstHit] = useState<WeatherSingleDetail>(undefined);
  const [completeDayCycle, setCompleteDayCycle] = useState<
    WeatherSingleDetail[]
  >([]);
  const [weekForecast, setWeekForecast] = useState<WeatherSingleDetail[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const apiUrl = import.meta.env.VITE_API_ID;

  const handleInputChange = async (value: string) => {
    setCity(value);
    if (value.length >= 3) {
      try {
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${apiUrl}`
        );

        if (response.data.list) {
          const suggestions: string[] = response.data.list
            .map((item) => {
              const countryCode = countries.find(
                (code) => code.code === item.sys.country
              ).name;

              return item.name + ", " + countryCode;
            })
            .filter((value, index, a) => a.indexOf(value) === index);

          setShowSuggestions(true);
          setSuggestions(suggestions);
          setError("");
        }
      } catch (error) {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (value: string) => {
    setIsLoading(true);
    setPlace(value);
    setShowSuggestions(false);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (suggestions.length == 0) {
      setError("Location not found");

      setIsLoading(false);
    } else if (suggestions.length >= 1) {
      setIsLoading(true);
      setPlace(suggestions[0]);
      setSuggestions([]);
    } else {
      setError("");
      setIsLoading(true);
      setTimeout(() => {
        setPlace(city);

        setShowSuggestions(false);
        setIsLoading(false);
      }, 500);
    }
  };

  const handleCurrentLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiUrl}`
          );

          setPlace(
            response.data.name +
              ", " +
              countries.find(
                (country) => country.code === response.data.sys.country
              ).name
          );

          setCity("");
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      });
    }
  };

  const obtainWeatherData = useCallback(async () => {
    try {
      const { data } = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${apiUrl}&cnt=40`
      );
      setWeatherData(data);
      const uniqueDates = [
        ...new Set(
          data?.list.map(
            (entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
          )
        ),
      ];

      const firstDataForEachDate = uniqueDates.map((date) => {
        return data?.list.find((entry) => {
          const entryDate = new Date(entry.dt * 1000)
            .toISOString()
            .split("T")[0];
          const entryTime = new Date(entry.dt * 1000).getHours();
          return entryDate === date && entryTime >= 6;
        });
      });

      setCompleteDayCycle(data.list.slice(0, 8));

      setWeekForecast(firstDataForEachDate);

      setFirstHit(data.list[0]);

      setTimeout(() => setIsLoading(false), 1500);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [place]);

  const clearError = () => {
    setError("");
  };

  useEffect(() => {
    obtainWeatherData();
  }, [obtainWeatherData]);

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
        firstHit,
        completeDayCycle,
        weekForecast,
        clearError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
