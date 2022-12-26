import Image from "next/image";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typing";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const greetingTime = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let text = "";
    if (h >= 4 && h < 10) {
      text = "Selamat pagi";
    }
    if (h >= 10 && h < 15) {
      text = "Selamat siang";
    }
    if (h >= 15 && h < 18) {
      text = "Selamat sore";
    }
    if (h >= 18 || h < 4) {
      text = "Selamat malam";
    }
    return `${text} & selamat datang teman`;
  };

  const [text, count] = useTypewriter({
    words: [
      greetingTime(),
      `Perkenalkan saya Timur asal Balikpapan`,
      "Terimakasih sudah mampir silahkan di lihat-lihat 😀",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="self-end w-full px-4">
            <div className="relative flex justify-center -mt-10 lg:right-0 lg:-mt-5">
              <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt="heroImage"
                className="relative object-cover w-32 h-32 mx-auto rounded-full"
                quality="100"
                width="150px"
                height="150px"
              />
              {/* <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Timur Dian"
                className="relative z-10 mx-auto w-[350px] max-w-full md:w-[400px]"
                quality="100"
                width="300px"
                height="300px"
              />
              <span className="absolute bottom-0 scale-125 -translate-x-1/2 left-1/2 md:bottom-6 md:scale-150">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#3b82f6"
                    d="M67.7,-23.3C75.7,2.7,61.9,34.4,38.6,50.8C15.3,67.1,-17.4,68.1,-41.2,51.9C-65,35.8,-79.9,2.5,-71.5,-23.9C-63.1,-50.4,-31.6,-70,-0.9,-69.8C29.8,-69.5,59.7,-49.3,67.7,-23.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span> */}
            </div>
          </div>
          <div className="self-center w-full px-4 mt-10 text-center">
            <h1 className="mb-8 text-base font-semibold text-primary md:text-xl lg:text-2xl">
              {pageInfo.role}

              <span className="block mt-1 text-2xl font-bold text-dark dark:text-white lg:text-4xl">
                {text}
              </span>
            </h1>

            {/* <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
              UI Designer &
              <span className="text-dark dark:text-white"> Web Developer</span>
            </h2> */}

            <a
              href="#contact"
              className="px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out rounded-full bg-primary hover:opacity-80 hover:shadow-lg"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
