import { createContext } from "react";
import { WeatherData, WeatherDetail } from "../types";

interface WeaterContextProps {
  city: string;
  error: string;
  suggestions: string[];
  place: string;
  showSuggestions: boolean;
  isLoading: boolean;
  handleInputChange: (value: string) => void;
  handleSuggestionClick: (value: string) => void;
  handleSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCurrentLocation: () => void;
  clearError?: () => void;
  weatherData?: WeatherData | undefined;
  weatherDetail?: WeatherDetail;
}

export const WeatherContext = createContext<WeaterContextProps>(
  {} as WeaterContextProps
);
