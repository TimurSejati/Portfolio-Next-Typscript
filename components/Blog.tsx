import React from "react";
import { PageInfo } from "../typing";

type Props = {};

export default function Blog() {
  return (
    <section id="blog" className="pb-32 bg-slate-100 pt-36 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Tulisan Terkini
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              atque perspiciatis fuga fugit?
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-slate-700">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                className="w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary dark:text-white"
                  >
                    Tips Belajar Programming
                  </a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque, consequuntur.
                </p>
                <a
                  href="#"
                  className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-slate-700">
              <img
                src="https://source.unsplash.com/360x200?keyboard+mechanical"
                alt="Programming"
                className="w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary dark:text-white"
                  >
                    Review Keyboard GMMK Pro
                  </a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque enim quasi vitae!
                </p>
                <a
                  href="#"
                  className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-slate-700">
              <img
                src="https://source.unsplash.com/360x200?coffe"
                alt="Programming"
                className="w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary dark:text-white"
                  >
                    Menikmati Secangkir Kopi
                  </a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  laudantium ad quos.
                </p>
                <a
                  href="#"
                  className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
