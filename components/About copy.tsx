import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 md:top-14 uppercase tracking-[20px] text-gray-500 text-md md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="flex-shrink-0 object-cover w-52 h-52 lg:w-56 lg:h-72 -mb-36 rounded-full md:mb-0 md:rounded-lg xl:w-[450px] xl:h-[500px]"
      />

      <div className="px-0 -mb-24 space-y-10 md:mb-0 md:px-10">
        <h4 className="-mb-5 text-lg font-semibold md:mb-0 md:text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#0045FA]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          {pageInfo?.backgroundInformation}
        </p>
        <div className="w-full md:w-32 text-center heroButtonActive hover:text-white hover:bg-[#0045FA] cursor-pointer p-2">
          <a
            target="_blank"
            href="https://wa.me/+6289508436275"
            rel="noreferrer"
            aria-label="whatsapp"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.div>
  );
}
