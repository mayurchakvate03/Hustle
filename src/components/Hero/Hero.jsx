import React from "react";
import HeroImage from "../../assets/1.png";
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
            Unlock a Passion ,Side Hustle ,or New{" "}
            <span className="text-gray-400">Profession</span>
          </motion.h1>
          <motion.p   variants={slideUp(0.4)}
            initial="initial"
            animate="animate">
            Join our community of learners and start your journey today. Whether
            you're looking to turn a hobby into a side hustle or explore a new
            profession, we have the resources and support you need to succeed.
            {""}
          </motion.p>
          <motion.button   variants={slideUp(0.6)}
            initial="initial"
            animate="animate" className="primary-btn bg-gray-900 hover:bg-primary duration-300">
            More News
          </motion.button>
        </div>
        {}

        <div className="flex justify-center items-center">
          <motion.img
            initial={{
              opacity: 0,
              x:100,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={HeroImage}
            alt=""
            className="w-[80%] md:w-[550px] xl:-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
