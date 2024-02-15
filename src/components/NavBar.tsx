import { BsCloudHaze } from "react-icons/bs";

import * as React from "react";
import SearchBox from "./SearchBox";

interface NavBarProps {}

const NavBar = ({}: NavBarProps): React.ReactElement => {
  return (
    <nav className="w-full flex flex-col justify-center items-center gap-y-5 text-5xl text-orange-50">
      <BsCloudHaze className="mt-5" />
      <span className="uppercase font-sans">Cloudpeek</span>
      <SearchBox />
    </nav>
  );
};

export default NavBar;
