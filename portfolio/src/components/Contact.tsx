import { FormEvent, useRef } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

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

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h3 className="text-4xl md:text-4xl lg:text-5xl">Lets Chat!</h3>
        <div className="w-full flex justify-center py-4 xl:mr-[4rem] lg:mr-0">
          <p className="px-2 w-full lg:w-1/2 lg:px-12 text-center md:w-3/4 text-[0.95rem] lg:text-base xl:text-lg">
            Feel free to reach out via email or direct message on{" "}
            <a
              href="https://www.linkedin.com/in/daniel-f-perez/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Linkedin
            </a>
            , always happy to have a chat!
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-white gap-4">
        <div className="w-full flex justify-around py-4 xl:mr-[4rem] lg:mr-0"></div>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-full lg:w-1/2 lg:px-0 px-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full mb-16 lg:mb-30"
          >
            <div className="flex">
              <div className="w-1/2 pr-2">
                <label className="text-white ">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mb-4 p-2 w-full"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="text-white">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="mb-4 p-2 w-full"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mb-4 p-2 w-full"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="text-white">Linkedin (Optional)</label>
                <input type="text" name="subject" className="mb-4 p-2 w-full" />
              </div>
            </div>

            <label className="text-white">Message</label>
            <textarea name="message" rows={4} required className="mb-4 p-2" />
            <div className="w-full flex justify-end">
              <button
                type="submit"
                value="Send"
                className="border px-4 py-1 w-full lg:w-1/4 text-white font-medium bg-[#1F2937] border-none hover:text-[orange] transition ease-in-out hover:outline hover:outline-[orange] hover:outline-1 "
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
