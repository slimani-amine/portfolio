"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { IoClose } from "react-icons/io5";
import { BiZoomIn } from "react-icons/bi";

const BrowserFrame = ({ children, url, name }) => (
  <div className="w-full h-full rounded-2xl overflow-hidden bg-[#1B1B1B] shadow-2xl">
    {/* Browser Header */}
    <div
      className={`h-8 bg-[#2A2A2A] flex items-center px-4 gap-2 ${
        url ? "cursor-pointer hover:bg-[#3A3A3A] transition-colors" : ""
      }`}
      onClick={() => url && window.open(url, "_blank")}
    >
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-[#1B1B1B] rounded-md px-20 py-1 text-xs text-white/50 truncate">
          {url || (name && `${name} preview`) || "project preview"}
        </div>
      </div>
    </div>
    {/* Browser Content */}
    <div className="w-full h-[calc(100%-2rem)]">{children}</div>
  </div>
);

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsImageOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between ">
            <div className="flex flex-col gap-[20px] md:gap-[30px]">
              <div className="text-6xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="leading-tight">
                <h1 className="text-[28px] md:text-[42px] font-bold hover:text-accent transition-all duration-500">
                  {project.title}
                </h1>
                <h2 className="text-[16px] md:text-[20px] font-semibold leading-none text-white">
                  As a {project.as}
                </h2>
              </div>
              <p className="text-white/60 text-[14px] md:text-[16px]">
                {project.description}
              </p>
              <ul className="flex gap-2 md:gap-4 text-[14px] md:text-[16px]">
                {project?.stack.map((item, index) => (
                  <li key={index} className="text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-2 md:gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-2xl md:text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm md:text-base">Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-2xl md:text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm md:text-base">
                            Github repository
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {!project.live && !project.github && (
                  <div className="flex gap-2 md:gap-4">
                    <MdOutlinePrivateConnectivity className="text-white text-3xl group-hover:text-accent" />
                    <p className="text-sm md:text-base">Private project</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="aspect-[4/3] mb-8 md:mb-12"
              onSlideChange={handlSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <BrowserFrame url={item.live} name={item.title}>
                    <div
                      className="relative w-full h-full group flex justify-center items-center bg-transparent cursor-pointer"
                      onClick={() => handleImageClick(item.image)}
                    >
                      <div className="absolute top-0 bottom-0 w-full h-full z-10 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <BiZoomIn className="text-white text-4xl" />
                        </div>
                      </div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={item.image}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          alt={item.title}
                          priority
                        />
                      </div>
                    </div>
                  </BrowserFrame>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white hover:text-accent z-50"
          >
            <IoClose size={30} />
          </button>
          <div
            className="relative w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <BrowserFrame url={project.live} name={project.title}>
              <Image
                src={selectedImage}
                fill
                className="object-cover"
                alt="Project preview"
                priority
              />
            </BrowserFrame>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Work;
