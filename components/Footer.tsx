import React from "react";
import { Social } from "../typing";
import SocialIcon from "./SocialIcon";

type Props = {
  socials: Social[];
};

export default function Footer({ socials }: Props) {
  return (
    <footer className="pb-12 bg-dark">
      <div className="container">
        <div className="w-full pt-10 border-slate-700">
          <div className="flex items-center justify-center mb-5">
            <SocialIcon socialType="Instagram" socials={socials} />
            <SocialIcon socialType="Linkedin" socials={socials} />
            <SocialIcon socialType="Twitter" socials={socials} />
            <SocialIcon socialType="Facebook" socials={socials} />
            <SocialIcon socialType="Discord" socials={socials} />
          </div>
          <p className="text-xs font-medium text-center text-slate-500">
            &#169; {new Date().getFullYear()} Dibuat dengan{" "}
            <span className="text-pink-500">❤️</span>{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              className="font-bold text-primary"
              rel="noreferrer"
            >
              Timur Dian
            </a>
            , menggunakan{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              className="font-bold text-sky-500"
              rel="noreferrer"
            >
              Tailwind CSS
            </a>
            {" - "}
            <a
              href="https://nextjs.org"
              target="_blank"
              className="font-bold text-white"
              rel="noreferrer"
            >
              Next JS
            </a>
            {" - "}
            <a
              href="https://sanity.io"
              target="_blank"
              className="font-bold text-red-500"
              rel="noreferrer"
            >
              Sanity
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
