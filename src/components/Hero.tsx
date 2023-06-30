import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

import HeroImg from "../assets/hero.png";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative rounded-[10px]">
      <div className="absolute top-[50%] z-10 -translate-y-[50%] text-center mx-auto">
        <h3 className="text-[42px] xl:text-[70px] leading-[90px] text-white">
          Level up your style with our summer collections
        </h3>
        <button className="mt-4 xl:mt-8 bg-white rounded-[5px] text-[#505050] py-3 px-8">
          Shop Now
        </button>
      </div>
      <div className="embla">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex h-auto w-full embla__container space-x-4">
            <div className="embla__slide">
              {/* overlay */}
              <div className="bg-black/20 w-full h-[492px] rounded-[10px] absolute inset-0"></div>
              <img src={HeroImg} alt="hero 1" />
            </div>
            <div className="embla__slide">
              {/* overlay */}
              <div className="bg-black/20 w-full h-[492px] rounded-[10px] absolute inset-0"></div>
              <img src={HeroImg} alt="hero 1" />
            </div>
            <div className="embla__slide">
              {/* overlay */}
              <div className="bg-black/20 w-full h-[492px] rounded-[10px] absolute inset-0"></div>
              <img src={HeroImg} alt="hero 1" />
            </div>
          </div>
        </div>
        <div className="flex items-center absolute right-5 xl:right-7 top-5 xl:top-7 z-10">
          <button
            className="w-12 h-12 bg-[#F4F4F4] border border-solid border-[#C0C0C0] flex justify-center items-center embla__prev disabled:cursor-not-allowed"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_57)">
                <path
                  d="M4.4442 10.7804L13.3445 19.6805C13.5503 19.8865 13.8251 20 14.1181 20C14.4111 20 14.6859 19.8865 14.8918 19.6805L15.5472 19.0252C15.9737 18.5982 15.9737 17.9042 15.5472 17.4779L8.07344 10.0041L15.5555 2.52209C15.7613 2.31608 15.875 2.04145 15.875 1.7486C15.875 1.45543 15.7613 1.1808 15.5555 0.974625L14.9001 0.319508C14.694 0.113495 14.4194 -1.27252e-07 14.1264 -1.52868e-07C13.8334 -1.78483e-07 13.5586 0.113495 13.3527 0.319507L4.4442 9.22773C4.23786 9.43439 4.12453 9.71033 4.12518 10.0037C4.12453 10.2981 4.23786 10.5739 4.4442 10.7804Z"
                  fill={!prevBtnEnabled ? "#CACACA" : "#4F4F4F"}
                />
              </g>
              <defs>
                <clipPath id="clip0_1_57">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(20 20) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            className="w-12 h-12 bg-[#F4F4F4] flex justify-center items-center embla__next disabled:text-[#CACACA] disabled:cursor-not-allowed"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_61)">
                <path
                  d="M15.5558 10.7804L6.65555 19.6805C6.4497 19.8865 6.1749 20 5.8819 20C5.58889 20 5.3141 19.8865 5.10824 19.6805L4.4528 19.0252C4.0263 18.5982 4.0263 17.9042 4.4528 17.4779L11.9266 10.0041L4.44451 2.52209C4.23866 2.31608 4.125 2.04145 4.125 1.7486C4.125 1.45543 4.23866 1.1808 4.44451 0.974625L5.09995 0.319508C5.30596 0.113495 5.5806 -1.27252e-07 5.8736 -1.52868e-07C6.16661 -1.78483e-07 6.4414 0.113495 6.64725 0.319507L15.5558 9.22773C15.7621 9.43439 15.8755 9.71033 15.8748 10.0037C15.8755 10.2981 15.7621 10.5739 15.5558 10.7804Z"
                  fill={!nextBtnEnabled ? "#CACACA" : "#4F4F4F"}
                />
              </g>
              <defs>
                <clipPath id="clip0_1_61">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 absolute bottom-[1.5rem] xl:bottom-[2.5rem] left-0 right-0">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={"w-2.5 h-2.5 rounded-[10px] bg-[#B3B3B3]".concat(
              index === selectedIndex ? " !bg-[#000]" : ""
            )}
            type="button"
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
