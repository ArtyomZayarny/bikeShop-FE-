"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Slider = () => {
  const slides = [
    {
      url: "https://jollyride.com.ua/content/images/1/1920x768e90nn0/21594047043309.webp",
    },
    {
      url: "https://jollyride.com.ua/content/images/44/1920x768e90nn0/22693676874086.webp",
    },
    {
      url: "https://jollyride.com.ua/content/images/25/1920x768e90nn0/62356781433542.webp",
    },

    {
      url: "https://jollyride.com.ua/content/images/50/1920x768e90nn0/80714361152264.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="slider" className="flex justify-center">
      <div className="w-full">
        <div className="2xl:h-[768px] xl:h-[610px] lg:h-[610px] w-full m-auto relative group">
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full h-full bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex justify-center py-2 absolute bottom-6 w-full">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled color="#fff" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
