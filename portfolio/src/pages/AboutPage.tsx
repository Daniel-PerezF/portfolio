import { memojis } from "../constants/data";
import { useDarkMode } from "../context/useDarkMode";

export function AboutPage() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen slow ${
        darkMode ? `bg-dark text-white` : "bg-[#EBEBEB] text-darker"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-4 lg:pt-44 pt-36">
        <h3 className="text-4xl md:text-4xl lg:text-5xl">About Me</h3>
        <div className="w-full lg:w-[95%] text-center md:w-3/4 flex justify-center py-4 flex-col">
          <div className="flex justify-center pb-4">
            <div className="w-full flex justify-center">
              <div className="overflow-hidden w-full justify-center flex">
                <div className="max-w-[10rem] h-[200px] overflow-hidden">
                  <img src={memojis[0]} className="w-full rounded-md " />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <p className="px-4 w-full lg:w-[70%] text-center text-[0.95rem] lg:text-base xl:text-lg">
              Hello there! I'm Daniel, a software developer with a passion for
              technology that traces back to my childhood. Growing up surrounded
              by a household computer and educational games, I was always
              curious about the magic happening behind the scenes.
              <br />
              <br />
              As I explored various career paths, it wasn't until the rise of AI
              captured my attention that I decided to dive deep into the world
              of software, AI, and coding. Further realizing that code is the
              backbone of everything tech-related, I embarked on a self-learning
              journey and later enrolled in the LearningFuze coding bootcamp in
              Irvine, California.
              <br />
              <br />
              The intensive full-stack software development course not only
              expanded my technological skills but also provided a profound
              self-discovery experience. It was during this time that I
              uncovered my genuine passion for coding and software development.
              Coming from a background of creative and artistic interests, I
              found immense satisfaction in web design, allowing me to express
              myself in a whole new way.
              <br />
              <br />
              Completing the bootcamp was a turning point, revealing my true
              calling in a field that excites me. Now, I'm thrilled to continue
              growing and learning in the ever-evolving world of software
              development. Join me on this journey, and let's see where the
              future takes us! Let's create something amazing! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
