import { GiStripedSun } from "react-icons/gi";
import SearchBox from "./SearchBox";

const NavBar = (): React.ReactElement => {
  return (
    <nav className="w-full mb-10 flex flex-col justify-center items-center gap-y-10 text-5xl text-orange-50">
      <GiStripedSun className="mt-5 text-7xl" />
      <span className="uppercase font-sans text-2xl sm:text-5xl">
        BreezeFlow
      </span>
      <div className={"flex gap-x-5 cursor-pointer"}>
        <SearchBox />
      </div>
    </nav>
  );
};

export default NavBar;
