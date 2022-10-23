import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="relative z-50 flex cursor-pointer group">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="object-cover w-12 h-12 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-24 md:h-24 filter group-hover:grayscale"
      />
      <div className="absolute z-0 w-12 h-12 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-24 md:h-24">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold text-black opacity-100 text-md">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
