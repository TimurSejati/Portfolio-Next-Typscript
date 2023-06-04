import Image from "next/image";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo, Social } from "../typing";
import SocialIcon from "./SocialIcon";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

export default function Hero({ pageInfo, socials }: Props) {
  const greetingTime = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let text = "";
    if (h >= 4 && h < 10) {
      text = "Good Morning";
    }
    if (h >= 10 && h < 15) {
      text = "Good Afternoon";
    }
    if (h >= 15 && h < 18) {
      text = "Good Afternoon";
    }
    if (h >= 18 || h < 4) {
      text = "Good Night";
    }
    return `${text}, welcome friends`;
  };

  const [text, count] = useTypewriter({
    words: [
      greetingTime(),
      `Hi I'm timur from Balikpapan City Indonesia`,
      "Thankyou for visiting 😀",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className=" dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap h-screen">
          <div className="self-end w-full px-4">
            <div className="relative flex justify-center -mt-10 lg:right-0 lg:-mt-5">
              <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt="heroImage"
                className="relative object-cover w-32 h-32 mx-auto rounded-full"
                quality="100"
                width="180px"
                height="180px"
              />
            </div>
          </div>
          <div className="w-full px-4 mt-10 text-center">
            <div className="flex items-center justify-center mb-8">
              <SocialIcon socialType="Instagram" socials={socials} />
              <SocialIcon socialType="Linkedin" socials={socials} />
              <SocialIcon socialType="Twitter" socials={socials} />
              <SocialIcon socialType="Facebook" socials={socials} />
              <SocialIcon socialType="Discord" socials={socials} />
            </div>
            <h1 className="mb-8 text-base font-semibold text-primary md:text-xl lg:text-2xl">
              {pageInfo.role}

              <span className="block mt-1 text-2xl font-bold text-dark dark:text-white lg:text-4xl">
                {text}
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div>
                <a
                  href="#contact"
                  aria-label="contact"
                  className="px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out rounded-full bg-primary hover:opacity-80 hover:shadow-lg"
                >
                  Contact Me
                </a>
              </div>
              <div>
                <a
                  href="#portfolio"
                  aria-label="portfolio"
                  className="px-8 py-3 text-base font-semibold transition duration-300 ease-in-out border border-2 rounded-full text-primary border-primary hover:opacity-70 hover:shadow-lg"
                >
                  Go to Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
