import React from "react";
import BannerImg from "../../assets/3.png";
import { motion } from "framer-motion";
import { slideUp } from "../utility/animation";

const Banner = () => {
  return (
    <>
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Text content section */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl xl:text-5xl font-semibold text-black/80"
            >
              🚛 “Waste management is not about dumping. ”{" "}
              <br />
              <span className="text-gray-400 ">It’s about how responsibly it works.</span>
            </motion.h1>
            <motion.button
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="primary-btn hover:bg-black  text-black hover:text-white duration-300"
            >
              More News
            </motion.button>
            <div className="flex gap-3">
              <motion.div
                variants={slideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="space-y-2"
              >
                <p className="font-semibold text-lg">🛠️ Waste Sorting Tools </p>
                <p>Use our smart guides and digital tools to learn how to properly segregate wet, dry, and e-waste for efficient recycling.</p>
              </motion.div>
              <motion.div
                variants={slideUp(0.8)}
                initial="initial"
                whileInView="animate"
                className="space-y-2"
              >
                <p className="font-semibold text-lg">🌍 Recycling Awareness</p>
                <p>Get tips on reducing plastic use, composting organic waste, and contributing to a cleaner environment.</p>
              </motion.div>
            </div>
          </div>
          {/* Banner Image section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={BannerImg}
              alt=""
              className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-125"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;