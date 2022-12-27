import React from "react";
import { Social } from "../typing";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="absolute top-0 left-0 z-20 flex items-center w-full bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 text-lg font-bold text-primary"
            >
              TimurDev.
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              aria-label="hamburger"
              type="button"
              id="hamburger"
              name="hamburger"
              className="absolute block right-4 lg:hidden"
            >
              <span className="transition duration-300 ease-in-out origin-top-left hamburger-line"></span>
              <span className="transition duration-300 ease-in-out hamburger-line"></span>
              <span className="transition duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
            </button>

            <nav
              id="nav-menu"
              className="rouned-lg absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-6 shadow-lg dark:bg-slate-800  lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Portfolio
                  </a>
                </li>
                {/* <li className="group">
                  <a
                    href="#blog"
                    className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Blog
                  </a>
                </li> */}
                <li className="group">
                  <a
                    href="#contact"
                    className="flex py-2 mx-8 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li className="flex items-center pl-8 mt-3 lg:mt-0">
                  <div className="flex">
                    <span className="mr-2 text-md text-slate-500">🌞</span>
                    <input
                      type="checkbox"
                      className="hidden"
                      id="dark-toggle"
                    />
                    <label htmlFor="dark-toggle">
                      <div className="flex items-center h-5 p-1 rounded-full cursor-pointer w-9 bg-slate-500">
                        <div className="w-4 h-4 transition duration-300 ease-in-out bg-white rounded-full toggle-circle"></div>
                      </div>
                    </label>
                    <span className="ml-2 text-md text-slate-500">🌚</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
