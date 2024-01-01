import { Link } from "react-router-dom";

export function DetailsHeader() {
  return (
    <div className="flex justify-between p-1 relative z-61">
      <Link to="/">
        <img
          src={`${import.meta.env.BASE_URL}/orange-icon.png`}
          className="max-w-[4rem] lg:max-w-[6rem] hover:translate-y-[2px] cursor-pointer"
        />
      </Link>

      <div className="hidden justify-around w-1/2 sm:hidden lg:flex text-2xl text-white">
        {/* Add onClick handlers to trigger smooth scrolling */}
      </div>
    </div>
  );
}
