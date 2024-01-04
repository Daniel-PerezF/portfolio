import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../context/useDarkMode";

export function DetailsHeader() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`slow flex justify-between p-1 relative z-61 ${
        darkMode ? "bg-dark" : "dark-white"
      }`}
    >
      <Link to="/">
        <img
          src={`/orange-icon.png`}
          className="max-w-[4rem] lg:max-w-[6rem] hover:translate-y-[2px] cursor-pointer"
        />
      </Link>
      <div className="absolute top-[1rem] right-4">
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
