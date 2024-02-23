import { FaSearchengin } from "react-icons/fa";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherC";
import SuggestionList from "./SuggestionList";
import { BiCurrentLocation } from "react-icons/bi";

const SearchBox = (): React.ReactElement => {
  const { handleSubmitSearch, handleInputChange, city, handleCurrentLocation } =
    useContext(WeatherContext);
  return (
    <>
      <form
        onSubmit={handleSubmitSearch}
        className="flex relative h-auto text-white items-center justify-between bg-blue-400 rounded-lg focus:border-blue-600 "
      >
        <input
          value={city}
          type="text"
          placeholder="Where to?"
          onChange={(e) => handleInputChange(e.target.value)}
          className="placeholder-white p-3 max-[500px]:w-[200px] w-[200px] md:w-[500px]  max-[500px]:text-lg 
         bg-blue-400 border border-blue-400 rounded-l-md focus:outline-none  text-2xl border-r-0 font-mono  text-white"
        />
        <button className="p-3  text-white  bg-blue-400  focus:outline-none hover:bg-blue-500 h-full focus:border-blue-600  ">
          <FaSearchengin size={25} />
        </button>

        <SuggestionList />
      </form>
      <button className="p-3  text-white ml-[-20px]  bg-blue-400 h-[57.6px] focus:outline-none hover:bg-blue-500  focus:border-blue-600 rounded-r-md  ">
        <BiCurrentLocation onClick={handleCurrentLocation} size={25} />
      </button>
    </>
  );
};

export default SearchBox;
