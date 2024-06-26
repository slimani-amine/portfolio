"use client"
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[70vh] flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
      </h1>
      <p className="text-white text-lg mb-8">
        We&apos;re working hard to bring you something amazing. Stay tuned!
      </p>
    </motion.div>
  );
};

export default ComingSoon;
