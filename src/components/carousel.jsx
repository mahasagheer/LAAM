import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className=" xl:mx-16 lg:mx-10 md:mx-0 sm:mx-0">
      <div className=" overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between ">
          <button
            onClick={prev}
            className="p-4  shadow bg-white/80 text-grey-800 hover:bg-white
          "
          >
            {" "}
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <button
            onClick={next}
            className="p-4  shadow bg-white/80 text-grey-800 hover:bg-white"
          >
            {" "}
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
        <div className="absolute bottom-2 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-10 h-1 bg-white rounded-sm
            ${curr === i ? "p-0" : "bg-opacity-50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
