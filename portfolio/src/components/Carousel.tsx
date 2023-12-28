import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { CarouselProps } from "../Types/types";

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

  return (
    <div className="flex ">
      <button onClick={prevSlide} className="text-white text-5xl">
        <IoMdArrowDropleft className="hover:translate-x-[-4px] transition ease-in-out" />
      </button>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: index === currentIndex ? "block" : "none",
              border: "1px solid black",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="text-white text-5xl">
        <IoMdArrowDropright className="hover:translate-x-[4px] transition ease-in-out" />
      </button>
    </div>
  );
}
