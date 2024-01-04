import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { CarouselProps } from "../constants/types";
import { useDarkMode } from "../context/useDarkMode";

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`flex w-full slow ${darkMode ? "text-white" : "text-darker"}`}
    >
      <button onClick={prevSlide} className=" text-3xl lg:text-5xl">
        <IoMdArrowDropleft className="hover:translate-x-[-4px] transition ease-in-out" />
      </button>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className={` ${index === currentIndex ? "block" : "hidden"}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className=" text-3xl lg:text-5xl">
        <IoMdArrowDropright className="hover:translate-x-[4px] transition ease-in-out" />
      </button>
    </div>
  );
}
