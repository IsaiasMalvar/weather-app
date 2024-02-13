import { createContext } from "react";
import { WeatherData, WeatherDetail } from "../types";

interface WeaterContextProps {
  isLoading: boolean;
  changeX: () => void;
  changeT: () => void;
  weatherData?: WeatherData | undefined;
  weatherDetail?: WeatherDetail;
  wordT: string;
}

export const WeatherContext = createContext<WeaterContextProps>(
  {} as WeaterContextProps
);
