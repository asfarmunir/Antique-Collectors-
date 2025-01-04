import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface Slide {
  image: string;
  alt: string;
  caption: string;
}

interface CarouselProps {
  items: Slide[]; // Array of slides with image, alt, and caption
  autoPlay?: boolean; // Enable auto-sliding
  autoPlayInterval?: number; // Interval for auto-slide in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Display three images at a time
  const visibleItemsCount = 3;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - visibleItemsCount : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - visibleItemsCount ? 0 : prevIndex + 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div className="w-full max-w-xl mx-auto relative ">
      {/* Left Arrow */}
      <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
        <button onClick={goToPrevious} className="text-[#919089]">
          <FaChevronLeft className="text-xl font-light" />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItemsCount)}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 h-48 p-2 flex flex-col items-center justify-center"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={0}
                height={0}
                layout="responsive"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
        <button onClick={goToNext} className="text-[#919089]">
          <FaChevronRight className="text-xl font-light" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
