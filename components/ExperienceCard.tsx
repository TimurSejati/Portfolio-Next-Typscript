import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.company}</h4>
        <p className="mt-1 text-2xl font-bold">{experience?.jobTitle}</p>
        <div className="flex my-2 space-x2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              className="w-10 h-10 rounded-full"
            />
          ))}
        </div>
        <p className="py-5 text-gray-300 uppercase">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 space-y-4 overflow-scroll text-lg list-disc max-h-96 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}