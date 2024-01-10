import { useState } from "react";
import { CarouselProps } from "../constants/types";
import { useDarkMode } from "../context/useDarkMode";

export function Carousel2({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { darkMode } = useDarkMode();
  return (
    <div
      className={`flex w-full slow ${darkMode ? "text-white" : "text-darker"}`}
    >
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className={` ${index === currentIndex ? "block" : "hidden"}`}
            onClick={nextSlide}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
