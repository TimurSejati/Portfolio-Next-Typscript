import React from "react";
import { Quotes as QuotesType } from "../typing";

type Props = {
  quotes: QuotesType[];
  indexQuote: number;
};

export default function Quotes({ quotes, indexQuote }: Props) {
  return (
    <section id="quotes" className="pb-32 bg-slate-700 pt-36 dark:bg-slate-600">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Quotes</h4>
            <blockquote className="mb-4 text-3xl italic font-thin text-white sm:text-4xl lg:text-5xl">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-white"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              {`"${quotes[indexQuote - 1].quotes}"`}
            </blockquote>
            <p className="font-medium text-md text-secondary md:text-lg">
              - {quotes[indexQuote - 1].quotesBy} -
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
