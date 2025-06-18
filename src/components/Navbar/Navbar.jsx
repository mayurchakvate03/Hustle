import React from "react";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom} from "../utility/animation";

const NavbrLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Features",
    link: "#",
  },
  {
    id: 3,
    title: "Shop",
    link: "#",
  },
  {
    id: 4,
    title: "About us",
    link: "#",
  },
  {
    id: 5,
    title: "Contact us",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="py-4 container flex justify-between items-center"
      >
        {}
        <div className="flex items-center  gap-1">
          <img src={Logo} alt="" className="w-[70px]" />
          <p className="font-bold text-2xl">HUSTLE</p>
        </div>
        {}
        <div className="hidden md:block">
          <ul className="flex gap-3 xl:gap-6">
            {NavbrLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="hover:text-primary uppercase text-sm xl:text-base"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {}
        <div>
          <button className="primary-btn">Request For Quots</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
