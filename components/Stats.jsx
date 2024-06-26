"use client";

import { stats } from "@/portfolio";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 maw-w-[800vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
              key={index}
            >
              <div className="flex justify-center items-center">
                <span className="text-4xl xl:text-6xl font-extrabold">+</span>

                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              </div>
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : " max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
