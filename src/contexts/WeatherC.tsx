import { createContext } from "react";
import { WeatherData, WeatherSingleDetail } from "../types";

interface WeaterContextProps {
  city: string;
  error: string;
  suggestions: string[];
  place: string;
  showSuggestions: boolean;
  isLoading: boolean;
  firstHit: WeatherSingleDetail;
  completeDayCycle: WeatherSingleDetail[];
  handleInputChange: (value: string) => void;
  handleSuggestionClick: (value: string) => void;
  handleSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCurrentLocation: () => void;
  clearError?: () => void;
  weatherData?: WeatherData | undefined;
  weatherDetail?: WeatherSingleDetail;
}

export const WeatherContext = createContext<WeaterContextProps>(
  {} as WeaterContextProps
);
