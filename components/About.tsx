import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo, Social } from "../typing";
import SocialIcon from "./SocialIcon";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

export default function About({ pageInfo, socials }: Props) {
  return (
    <section id="about" className="pb-32 pt-36 dark:bg-dark">
      <div className="container h-screen">
        <div className="grid items-end grid-cols-1 gap-24 lg:grid-cols-2">
          <div>
            <img
              src={urlFor(pageInfo?.profilePic).url()}
              alt="heroImage"
              className="object-contain border-t-4 border-l-4 border-primary rounded-3xl"
            />
          </div>

          <div>
            <h4 className="mb-3 text-lg font-bold text-primary">About</h4>
            <h2 className="max-w-md mb-5 text-3xl font-bold text-dark dark:text-white lg:text-4xl">
              Who am i?
            </h2>
            <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
              {pageInfo.backgroundInformation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inside Container

{
  /* <div className="flex flex-wrap">
<div className="w-full px-4 mb-10 lg:w-1/2">
  <h4 className="mb-3 text-lg font-bold text-primary">About</h4>
  <h2 className="max-w-md mb-5 text-3xl font-bold text-dark dark:text-white lg:text-4xl">
    Who am i?
  </h2>
  <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
    {pageInfo.backgroundInformation}
  </p>
</div>
<div className="w-full px-4 lg:w-1/2">
  <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
    Let&#39;s be friends
  </h3>

  <div className="flex items-center">
    <SocialIcon socialType="Instagram" socials={socials} />
    <SocialIcon socialType="Linkedin" socials={socials} />
    <SocialIcon socialType="Twitter" socials={socials} />
    <SocialIcon socialType="Facebook" socials={socials} />
    <SocialIcon socialType="Discord" socials={socials} />
  </div>
</div>
</div> */
}
