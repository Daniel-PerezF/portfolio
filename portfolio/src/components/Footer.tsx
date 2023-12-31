import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export function Footer() {
  function handleClick() {
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
    <div className="text-white p-4 bg-[#232f37]">
      <div className="flex justify-evenly w-full ">
        <div>
          <h3 className="underline">Site Map</h3>
          <div className="flex flex-col items-center">
            <Link to="/" className="hover:underline hover:text-slate-300">
              Home
            </Link>
            <Link to="/skills" className="hover:underline hover:text-slate-300">
              Skills
            </Link>
            <Link
              to="/projects"
              className="hover:underline hover:text-slate-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:underline hover:text-slate-300"
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="underline">Lets Connect</h3>
          <div className="flex justify-between w-full text-2xl ">
            <Link
              to="https://www.linkedin.com/in/daniel-f-perez/"
              target="_blank"
              className="hover:text-[#1866C2]"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://github.com/Daniel-PerezF"
              target="_blank"
              className="hover:text-[#696AEF]"
            >
              <FaGithub />
            </Link>
            <MdEmail
              onClick={handleClick}
              className="cursor-pointer hover:text-slate-500"
            />
          </div>
        </div>
      </div>
      <div className="mt-9 text-sm font-light">
        <h3>
          © 2023. All Rights Reserved. <br /> Made in California by Daniel
          Perez.
        </h3>
      </div>
    </div>
  );
}
