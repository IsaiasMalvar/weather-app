import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherC";

const SuggestionList = (): React.ReactElement => {
  const { showSuggestions, suggestions, handleSuggestionClick, error } =
    useContext(WeatherContext);
  return (
    <>
      {((showSuggestions && suggestions.length > 1) || error) && (
        <ul className="font-mono text-2xl  bg-white absolute border top-[70px] left-0 border-gray-300 rounded-md min-w-[200px]  flex flex-col gap-1 py-2 px-2">
          {error && suggestions.length < 1 && (
            <li className="text-red-500 p-1 "> {error}</li>
          )}
          {suggestions.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSuggestionClick(item)}
              className="cursor-pointer p-1 rounded   hover:bg-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SuggestionList;
