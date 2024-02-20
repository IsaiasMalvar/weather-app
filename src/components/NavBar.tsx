import { BiCurrentLocation } from "react-icons/bi";
import { GiStripedSun } from "react-icons/gi";

import SearchBox from "./SearchBox";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherC";

const NavBar = (): React.ReactElement => {
  const { handleCurrentLocation } = useContext(WeatherContext);
  return (
    <nav className="w-full mb-10 flex flex-col justify-center items-center gap-y-10 text-5xl text-orange-50">
      <GiStripedSun className="mt-5 text-5xl" />
      <span className="uppercase font-sans text-2xl sm:text-5xl">
        BreezeFlow
      </span>
      <div className="flex gap-x-5 cursor-pointer">
        <SearchBox />
        <BiCurrentLocation onClick={handleCurrentLocation} />
      </div>
    </nav>
  );
};

export default NavBar;
