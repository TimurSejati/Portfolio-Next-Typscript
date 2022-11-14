import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typing";
import BackgroundCircle from "./BackgroundCircle";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's is ${pageInfo?.name}`,
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircle />
      {/* <img
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      /> */}
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="heroImage"
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        quality="100"
        width="128px"
        height="128px"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl font-semibold md:text-5xl lg:text-6xl scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0045FA" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
