import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../context/useDarkMode";

export function DetailsHeader() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`slow flex justify-between p-1 relative z-61 pt-3 ${
        darkMode ? "bg-dark" : "bg-[#EBEBEB]"
      }`}
    >
      <Link to="/">
        <img
          src={`/orange-icon.png`}
          draggable="false"
          className="max-w-[4rem] lg:max-w-[6rem] hover:translate-y-[2px] cursor-pointer"
        />
      </Link>
      <div className="absolute top-[0.7rem] right-1 hover:translate-y-[3px] transition ease-in-out">
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          moonColor="white"
          sunColor="orange"
          size={30}
        />
      </div>
    </div>
  );
}
