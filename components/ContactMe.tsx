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
    window.location.href = `mailto:timur7dian84@gmail.com?subject=${formdata.subject}&body=Hi, my name is ${formdata.name}. ${formdata.message} (${formdata.email}})`;
  };

  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 md:top-14 uppercase tracking-[20px] text-gray-500 text-md md:text-2xl">
        ContactMe
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-xl font-semibold text-center md:text-4xl">
          I have got just you need.{" "}
          <span className="decoration-[#0045FA]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2 md:space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#0045FA] h-4 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+62 895 0843 6275</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#0045FA] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">timur7dian84@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#0045FA] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Muntilan, Jawa Tengah</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-2 w-fit"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contactInput"
          ></textarea>
          <button
            className="bg-[#0045FA]/70 py-3 px-8 md:py-5 md:px-10 rounded-md text-white font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
