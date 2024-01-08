import { useDarkMode } from "../context/useDarkMode";

export function AboutPage() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen ${
        darkMode ? `bg-dark text-white` : "bg-[#EBEBEB] text-darker"
      }`}
    >
      <div className="flex flex-col justify-center items-center  gap-4 lg:pt-44 pt-36">
        <h3 className="text-4xl md:text-4xl lg:text-5xl">About Me</h3>
        <div className="lg:w-3/4 w-fullflex justify-center py-4 flex-col lg:flex-row">
          <div className="flex justify-center pb-4">
            <div className="w-full flex justify-center">
              <div className="w-64 h-64 lg:w-[25rem] lg:h-[25rem] sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden">
                <img
                  draggable="false"
                  src={`/daniel-perez.png`}
                  className={`rounded-full w-full h-full object-cover select-none `}
                  alt="Daniel Perez"
                />
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

// 1st example
// Hey Everyone! I'm Daniel, a software developer with a journey that
// traces back to the early '00s. As a child, I was captivated by the
// magic of technology and computers. Our household computer, loaded
// with educational games, fueled my curiosity, leaving me in awe of
// what transpired behind the scenes. <br />
// <br />
// As I navigated through various jobs in search of my passion, the
// surge in AI caught my attention. This prompted a deep dive into the
// intricacies of software, AI, and games. The revelation that
// everything boils down to code sparked a newfound interest. I decided
// to embark on a journey to learn coding, convinced that technology is
// the future—the natural evolution of humanity. <br />
// <br />
// After self-learning for nearly a year, I enrolled in the
// LearningFuze coding bootcamp in Irvine, California. The accelerated
// and intense full-stack software development course was a
// transformative experience. Not only did I gain technical skills, but
// I also discovered a genuine passion. This journey not only shaped me
// technologically but unveiled a creative outlet that brings me
// immense satisfaction—web design. <br /> <br />
// Being inherently creative, I've found web design to be the perfect
// avenue for self-expression. The process of crafting visually
// appealing and functional websites resonates deeply with me.
// Completing the bootcamp was not just a professional achievement; it
// was a personal revelation. I am genuinely passionate about what I
// do. <br /> <br />
// As I continue to grow and learn in this field, I look forward to the
// exciting possibilities that lie ahead. Web design has become more
// than a career—it's a canvas where I express myself. I am thrilled
// about the journey ahead, eager to contribute to the ever-evolving
// landscape of technology, and excited to see where the future takes
// me. <br /> <br />
// Let's build something extraordinary together! 🚀

// 2nd example
// Hey there! I'm Daniel, a tech enthusiast who traced my fascination
// with computers back to the late '90s. Growing up, I played
// educational games that sparked my curiosity about the magic behind
// the screen. While exploring different jobs, the rise of AI prompted
// me to delve into coding. After self-learning for a year, I joined
// LearningFuze in Irvine for an intensive full-stack software
// development course. Completing the bootcamp not only equipped me
// with technical skills but revealed a genuine passion for web
// design—a perfect blend of technology and creativity. I'm excited to
// contribute to the tech evolution and can't wait to see where this
// journey takes me. Let's create something amazing! 🚀

// Hello there! I'm Daniel, a software developer with a passion for
// technology that traces back to my childhood in the early '00s.
// Growing up surrounded by a household computer and educational games,
// I was always curious about the magic happening behind the scenes.
// <br />
// <br />
// As I explored various career paths, it wasn't until the rise of AI
// captured my attention that I decided to dive deep into the world of
// software, AI, and coding. Realizing that code is the backbone of
// everything tech-related, I embarked on a self-learning journey and
// later enrolled in the LearningFuze coding bootcamp in Irvine,
// California.
// <br />
// <br />
// The intensive full-stack software development course not only
// expanded my technological skills but also provided a profound
// self-discovery experience. It was during this time that I uncovered
// my genuine passion for coding and software development. Coming from
// a background of creativity and artistic interests, I found immense
// satisfaction in web design, allowing me to express myself in a whole
// new way. <br />
// <br /> Completing the bootcamp was a turning point, revealing my
// true calling in a field that excites me. Now, I'm thrilled to
// continue growing and learning in the ever-evolving world of software
// development. Join me on this journey, and let's see where the future
// takes us! Let's create something amazing! 🚀

// import { useDarkMode } from "../context/useDarkMode";

// export function AboutPage() {
//   const { darkMode } = useDarkMode();
//   return (
//     <div
//       className={`min-h-screen ${
//         darkMode ? `bg-dark text-white` : "bg-[#EBEBEB] text-darker"
//       }`}
//     >
//       <div className="flex flex-col justify-center items-center gap-4 pt-40 w-full">
//         <h3 className="text-4xl md:text-4xl lg:text-5xl">About Me</h3>
//         <div className="lg:w-[70%] w-full flex justify-center py-4 xl:mr-[4rem] lg:mr-0 flex-col  lg:flex-col xl:flex-row">
//           <div className="flex justify-center pt-4 pb-4 ">
//             <div className="w-full flex justify-center ">
//               <div className="w-64 h-64 lg:w-[25rem] lg:h-[25rem] sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden">
//                 <img
//                   draggable="false"
//                   src={`/daniel-perez.png`}
//                   className={`rounded-full w-full h-full object-cover select-none `}
//                   alt="Daniel Perez"
//                 />
//               </div>
//             </div>
//           </div>

//           <p className="px-4 w-full lg:w-[70%] lg:px-12 text-left  md:w-3/4 text-[0.95rem] lg:text-base xl:text-lg ">
//             Hello there! I'm Daniel, a software developer with a passion for
//             technology that traces back to my childhood in the early '00s.
//             Growing up surrounded by a household computer and educational games,
//             I was always curious about the magic happening behind the scenes.
//             <br />
//             <br />
//             As I explored various career paths, it wasn't until the rise of AI
//             captured my attention that I decided to dive deep into the world of
//             software, AI, and coding. Realizing that code is the backbone of
//             everything tech-related, I embarked on a self-learning journey and
//             later enrolled in the LearningFuze coding bootcamp in Irvine,
//             California.
//             <br />
//             <br />
//             The intensive full-stack software development course not only
//             expanded my technological skills but also provided a profound
//             self-discovery experience. It was during this time that I uncovered
//             my genuine passion for coding and software development. Coming from
//             a background of creativity and artistic interests, I found immense
//             satisfaction in web design, allowing me to express myself in a whole
//             new way. <br />
//             <br /> Completing the bootcamp was a turning point, revealing my
//             true calling in a field that excites me. Now, I'm thrilled to
//             continue growing and learning in the ever-evolving world of software
//             development. Join me on this journey, and let's see where the future
//             takes us! Let's create something amazing! 🚀
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
