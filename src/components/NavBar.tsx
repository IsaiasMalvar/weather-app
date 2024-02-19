import { GiStripedSun } from "react-icons/gi";

import * as React from "react";
import SearchBox from "./SearchBox";

interface NavBarProps {}

const NavBar = ({}: NavBarProps): React.ReactElement => {
  return (
    <nav className="w-full mb-10 flex flex-col justify-center items-center gap-y-10 text-5xl text-orange-50">
      <GiStripedSun className="mt-5 text-5xl" />
      <span className="uppercase font-sans text-2xl sm:text-5xl">
        Cloudpeek
      </span>
      <SearchBox />
    </nav>
  );
};

export default NavBar;
