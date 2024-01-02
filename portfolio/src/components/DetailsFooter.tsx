import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export function DetailsFooter() {
  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }
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
    <div className="text-white p-4 bg-[#232f37]">
      <div className="flex justify-evenly w-full ">
        <div>
          <h3 className="underline">Back To</h3>
          <div className="flex flex-col items-center">
            <Link to="/">
              <h3 className="cursor-pointer  hover:text-[#FB904D]">Home</h3>
            </Link>

            <div onClick={handleGoBack}>
              <h3 className="cursor-pointer  hover:text-[#FB904D]">Projects</h3>
            </div>
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
              onClick={handleMailClick}
              className="cursor-pointer hover:text-slate-500"
            />
          </div>
        </div>
      </div>
      <div className="mt-9 text-xs font-light lg:text-sm leading-5">
        <h3>
          © 2024. All Rights Reserved. <br /> Made in California by Daniel
          Perez. <br /> Built using React, TypeScript, Tailwind and GitHub
          Pages.
        </h3>
      </div>
    </div>
  );
}