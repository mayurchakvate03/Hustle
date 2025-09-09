import React from "react";
import HeroImage from "../../assets/12.png";
import { motion } from "framer-motion";
import { slideUp } from "../utility/animation";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1  md:grid-cols-2 min-h-[600px]">
        {}
        <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left  py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
          <motion.h1
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-4xl xl:text-5xl font-bold"
          >
            EcoCycle – Manage Waste,{" "}
            <span className="text-gray-400">Save Earth</span>
          </motion.h1>
          <motion.p variants={slideUp(0.4)} initial="initial" animate="animate">
            Join our community in building a cleaner, smarter future. With
            RFID-powered waste tracking, our platform helps citizens,
            businesses, and organizations monitor disposal, improve segregation,
            and ensure responsible recycling. Together, we can make waste
            management more efficient, transparent, and sustainable.
            {""}
          </motion.p>
          <motion.button
            variants={slideUp(0.6)}
            initial="initial"
            animate="animate"
            className="primary-btn bg-gray-900 hover:bg-primary duration-300"
          >
            Contribute Today
          </motion.button>
        </div>
        {}

        <div className="flex justify-center items-center">
          <motion.img
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={HeroImage}
            alt=""
            className="rounded-xl
             w-[80%] md:w-[550px] xl:-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
