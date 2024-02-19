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
        className="p-3 w-[200px] border border-gray-50 rounded-l-md focus:outline-none focus:border-green-300 text-2xl font-mono text-blue-500"
      />
      <button className="p-2 text-white bg-blue-400 rounded-r-md focus:outline-none hover:bg-blue-500 h-full">
        <FaSearchengin />
      </button>
      <SuggestionList />
    </form>
  );
};

export default SearchBox;
