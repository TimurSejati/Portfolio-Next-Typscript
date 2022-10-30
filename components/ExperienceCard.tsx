import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[400px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="font-light md:text-2xl">{experience?.company}</h4>
        <p className="mt-1 font-bold md:text-xl">{experience?.jobTitle}</p>
        <div className="flex my-2 space-x2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              className="m-1 rounded-full w-7 h-7 md:w-10 md:h-10"
            />
          ))}
        </div>
        <p className="py-5 text-xs text-gray-300 uppercase md:text-md">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 space-y-4 overflow-scroll text-xs md:text-md list-disc max-h-96 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#0045FA]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
