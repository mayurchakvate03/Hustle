import React from "react";
import ServiceImg from "../../assets/2.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="container py-12">
        {/* header section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-12 flex justify-between items-center"
        >
          <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
            “Programs for Smarter Waste{" "}
            <span className="text-gray-400 ">Management”</span>
          </h1>
          <p className="hidden md:block">
            Notified to Spark your <br></br>
            <span className="text-gray-400 ">Balance</span>{" "}
          </p>
        </motion.div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={ServiceImg}
              alt=""
              className="rounded-lg w-[300px] mx-auto md:max-w-[500px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            {/* <img src={ServiceImg} alt="" className="w-14" /> */}
            <p className="uppercase font-semibold text-xl">
              ♻️ Segregate at Source
            </p>
            <p className="text-gray-500 pl-6 border-l-2">
              Proper waste management begins at home. Separate your wet, dry,
              and e-waste to make recycling efficient and reduce landfill waste.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            {/* <img src={ServiceImg} alt="" className="w-14" /> */}
            <p className="uppercase font-semibold text-xl">
              🚛 Smart Collection
            </p>
            <p className="text-gray-500 pl-6 border-l-2">
              Schedule pickups and track waste collection in real-time. Our
              smart system ensures your waste is collected on time and disposed
              responsibly.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            {/* <img src={ServiceImg} alt="" className="w-14" /> */}
            <p className="uppercase font-semibold text-xl">
              🌍 Recycle & Reuse
            </p>
            <p className="text-gray-500 pl-6 border-l-2">
              Join hands in creating a sustainable future. Reduce pollution by
              recycling waste into useful products and reusing resources.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
