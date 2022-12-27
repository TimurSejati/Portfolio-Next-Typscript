import React from "react";
import {
  PhotoIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:timur7dian84@gmail.com?body=Hallo, namaku ${formdata.name}. ${formdata.message} (${formdata.email}})`;
  };

  return (
    <section id="contact" className="pb-32 pt-36 dark:bg-slate-700">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Contact</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Hubungi Saya
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Jangan ragu untuk mengirimi saya pesan jika Anda memiliki beberapa
              penawaran menarik atau hanya ingin menyapa, saya akan mencoba yang
              terbaik untuk menghubungi Anda kembali!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="flex flex-wrap items-center justify-evenly">
              <div className="flex items-center justify-center w-full p-4 mx-4 mb-10 text-center rounded-lg md:w-1/3 dark:bg-dark bg-slate-200 text-dark dark:text-white">
                <EnvelopeIcon className="w-5 h-5 mr-3 md:h-7 md:w-7" />
                <div> timur7dian84@gmail.com</div>
              </div>
              <div className="flex items-center justify-center w-full p-4 mx-4 mb-10 text-center rounded-lg md:w-1/3 dark:bg-dark bg-slate-200 text-dark dark:text-white">
                <PhoneIcon className="w-5 h-4 mr-3 md:h-7 md:w-7" />
                <div> (+62) 895-0843-6275</div>
              </div>
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary"
              >
                Nama
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-slate-200 dark:bg-dark text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:text-white"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary"
              >
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full p-3 rounded-md bg-slate-200 dark:bg-dark text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:text-white"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                typeof="text"
                id="message"
                className="w-full h-32 p-3 rounded-md dark:text-white bg-slate-200 dark:bg-dark text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="w-full px-8 py-3 text-base font-semibold text-white transition duration-500 rounded-full bg-primary hover:opacity-80 hover:shadow-lg">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
