"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  const handlePrev = () => swiper.slidePrev();
  const handleNext = () => swiper.slideNext();
  
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={handlePrev} name="left">
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={handleNext} name="right">
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
