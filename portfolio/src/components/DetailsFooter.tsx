import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/useDarkMode";

export function DetailsFooter() {
  const { darkMode } = useDarkMode();
  function handleMailClick() {
    const emailAddress = "danielperezf98@gmail.com";
    const subject = "Lets Connect!";
    const body = "Hello,\n\nI would like to connect with you...";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  }

  return (
    <div
      className={`slow p-4  ${
        darkMode ? " bg-[#232f37] text-white" : "bg-dark text-white"
      }`}
    >
      <div className="flex justify-evenly w-full ">
        <div>
          <h3>Site Map</h3>
          <hr className="my-2 " />

          <div className="flex flex-col items-center">
            <Link to="/">
              <h3 className="cursor-pointer  hover:text-[#FB904D] transition ease-in">
                Home
              </h3>
            </Link>
          </div>
        </div>
        <div>
          <h3>Let's Connect</h3>
          <hr className="my-2 " />

          <div className="flex justify-between w-full text-2xl gap-3">
            <Link
              to="https://www.linkedin.com/in/daniel-f-perez/"
              target="_blank"
              className="hover:text-[#1866C2] transition ease-in"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://github.com/Daniel-PerezF"
              target="_blank"
              className="hover:text-[#696AEF] transition ease-in"
            >
              <FaGithub />
            </Link>
            <MdEmail
              onClick={handleMailClick}
              className="cursor-pointer hover:text-slate-500 transition ease-in"
            />
          </div>
        </div>
      </div>
      <div className="mt-9 text-xs font-light lg:text-sm leading-5">
        <h3>
          © 2024. All Rights Reserved. <br /> Made in California by Daniel
          Perez. <br />
        </h3>
      </div>
    </div>
  );
}
