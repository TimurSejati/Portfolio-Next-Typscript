import React from "react";
import { PageInfo, Social } from "../typing";
import SocialIcon from "./SocialIcon";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

export default function About({ pageInfo, socials }: Props) {
  return (
    <section id="about" className="pb-32 pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="mb-3 text-lg font-bold uppercase text-primary">
              Tentang
            </h4>
            <h2 className="max-w-md mb-5 text-3xl font-bold text-dark dark:text-white lg:text-4xl">
              Siapa Saya?
            </h2>
            <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
              {pageInfo.backgroundInformation}
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
              Mari berteman
            </h3>
            <p className="mb-6 text-base font-medium text-secondary">
              Memancing ikan pakai umpan. Umpan nya tidak di makan. Mari kita
              berkenalan Tambah saudara dan tambah teman 😅.
            </p>
            <div className="flex items-center">
              <SocialIcon socialType="Instagram" socials={socials} />
              <SocialIcon socialType="Linkedin" socials={socials} />
              <SocialIcon socialType="Twitter" socials={socials} />
              <SocialIcon socialType="Facebook" socials={socials} />
              <SocialIcon socialType="Discord" socials={socials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
