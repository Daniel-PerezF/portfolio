import { FormEvent, useRef } from "react";
import emailjs from "emailjs-com";
import { useDarkMode } from "../context/useDarkMode";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const { darkMode } = useDarkMode();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6t1wvg4",
        "template_rj264su",
        e.currentTarget,
        "OQLmnYzOMu4Vtjbwd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };
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
    <div className="">
      <div className="flex flex-col justify-center items-center  gap-4">
        <h3
          className={`text-4xl md:text-4xl lg:text-5xl ${
            darkMode ? "text-white" : "text-darker"
          }`}
        >
          Let's Chat!
        </h3>
        <div className="w-full flex justify-center py-4 xl:mr-[4rem] lg:mr-0">
          <p
            className={`px-2 w-full lg:w-1/2 lg:px-12 text-center md:w-3/4 text-[0.95rem] lg:text-base xl:text-lg ${
              darkMode ? "text-white" : "text-darker"
            }`}
          >
            Feel free to reach out via {""}
            <a
              onClick={handleMailClick}
              target="_blank"
              className="text-[#FB904D] hover:underline cursor-pointer"
            >
              email {""}
            </a>
            or direct message on {""}
            <a
              href="https://www.linkedin.com/in/daniel-f-perez/"
              target="_blank"
              className="text-[#FB904D] hover:underline "
            >
              Linkedin
            </a>
            , always happy to have a chat!
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  gap-4">
        <div className="w-full flex justify-around py-4 xl:mr-[4rem] lg:mr-0"></div>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-full lg:w-1/2 lg:px-0 px-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full mb-16 lg:mb-30 "
          >
            <div className="flex">
              <div className="w-1/2 pr-2">
                <label
                  htmlFor="name"
                  className={`${darkMode ? "text-white" : "text-darker"}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`mb-4 p-2 w-full focus:outline-[#FB904D] ${
                    darkMode ? "" : "outline-dark outline-1 outline"
                  }`}
                />
              </div>
              <div
                className={`w-1/2 pl-2 ${
                  darkMode ? "text-white" : "text-darker"
                }`}
              >
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className={`mb-4 p-2 w-full focus:outline-[#FB904D] ${
                    darkMode ? "" : "outline-dark outline-1 outline"
                  }`}
                />
              </div>
            </div>
            <div className={`flex ${darkMode ? "text-white" : "text-darker"}`}>
              <div className="w-1/2 pr-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`mb-4 p-2 w-full focus:outline-[#FB904D] ${
                    darkMode ? "" : "outline-dark outline-1 outline"
                  }`}
                />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="linkedin">Linkedin (Optional)</label>
                <input
                  type="text"
                  name="linkedin"
                  className={`mb-4 p-2 w-full focus:outline-[#FB904D] ${
                    darkMode ? "" : "outline-dark outline-1 outline"
                  }`}
                />
              </div>
            </div>

            <label
              htmlFor="message"
              className={`${darkMode ? "text-white" : "text-darker"}`}
            >
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className={`mb-4 p-2 w-full focus:outline-[#FB904D] ${
                darkMode ? "" : "outline-dark outline-1 outline"
              }`}
            />
            <div className="w-full flex justify-end">
              <button
                type="submit"
                value="Send"
                className={`border px-4 py-1 w-full lg:w-1/4  font-medium bg-[#1F2937] border-none hover:text-[#FB904D] transition ease-in-out hover:outline hover:outline-[#FB904D] hover:outline-1 ${
                  darkMode ? "text-white" : "text-white bg-dark"
                } `}
              >
                Send!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
