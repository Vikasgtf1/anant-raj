import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const mediaArticles = [
  {
    id: 1,
    logo: "./assets/media1.png",
    source: "CNBC TV18",
    text: "Anant Raj Shares Are Up 180% So Far In 2024; Motilal Oswal Sees Further Upside",
  },
  {
    id: 2,
    logo: "./assets/media2.png",
    source: "TechCircle",
    text: "Anant Raj Shares Are Up 180% So Far In 2024; Motilal Oswal Sees Further Upside",
  },
  {
    id: 3,
    logo: "./assets/media3.png",
    source: "Business Standard",
    text: "Anant Raj Shares Are Up 180% So Far In 2024; Motilal Oswal Sees Further Upside",
  },
  {
    id: 3,
    logo: "./assets/media3.png",
    source: "Business Standard",
    text: "Anant Raj Shares Are Up 180% So Far In 2024; Motilal Oswal Sees Further Upside",
  },
  {
    id: 3,
    logo: "./assets/media3.png",
    source: "Business Standard",
    text: "Anant Raj Shares Are Up 180% So Far In 2024; Motilal Oswal Sees Further Upside",
  },
  // Add more articles as needed
];

const Media = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16 ">
      <h2 className="font-sangbleu text-primaryred mb-20 uppercase tracking-widest text-[20px] leading-[40px] font-medium">
        Press & Media: Stay Informed &<span className="block">Inspired</span>
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mb-20"
      >
        {mediaArticles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className="flex flex-col items-center text-center ">
              <img
                src={article.logo}
                alt={article.source}
                className="h-[70px] w-[200px] object-contain"
              />
              <p className="text-sm mt-[35px] tracking-[1px] leading-[26px] max-w-xs">
                {article.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom controls */}
      <div className="flex justify-between items-center">
        <button className="text-primaryblue font-semibold text-sm border-t border-b border-primaryblue px-6 py-2 hover:bg-primaryblue hover:text-white transition">
          EXPLORE MORE NEWS
        </button>

        <div className="flex">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <img
              src="./assets/right-arrow.png"
              alt="Previous"
              className="h-5 w-5 rotate-180"
            />
          </button>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <img
              src="./assets/right-arrow.png"
              alt="Next"
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Media;
