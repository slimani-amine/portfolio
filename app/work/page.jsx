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

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handlSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
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
              className="h-[300px] md:h-[400px] xl:h-[520px] mb-8 md:mb-12"
              onSlideChange={handlSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full relative group flex justify-center items-center bg-transparent">
                    <div className="absolute top-0 bottom-0 w-full h-full  z-10"></div>
                    <Image
                      src={item.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      alt={item.title}
                      priority
                    />
                  </div>
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
    </motion.div>
  );
};

export default Work;
