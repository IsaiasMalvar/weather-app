import { FaSearchengin } from "react-icons/fa";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherC";
import SuggestionList from "./SuggestionList";

const SearchBox = (): React.ReactElement => {
  const { handleSubmitSearch, handleInputChange, city } =
    useContext(WeatherContext);
  return (
    <form onSubmit={handleSubmitSearch} className="flex relative">
      <input
        value={city}
        type="text"
        placeholder="Where to?"
        onChange={(e) => handleInputChange(e.target.value)}
        className="p-3 w-[200px] border border-gray-50 rounded-l-md focus:outline-none focus:border-green-300 text-2xl font-mono"
      />
      <button className="p-2 text-white bg-green-300 rounded-r-md focus:outline-none hover:bg-green-400 h-full">
        <FaSearchengin />
      </button>
      <SuggestionList />
    </form>
  );
};

export default SearchBox;
