import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import Image from "next/image";
import { Project } from "../typing";
import { urlFor } from "../sanity";

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: null | string;
  setShowDetail: (id: null | string) => void;
}> = ({
  project: {
    title,
    image,
    linkToBuild,
    linkToDeploy,
    summary,
    technologies,
    _id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div className="relative md:static">
      <img
        src={urlFor(image).url()}
        alt={title}
        className="h-56 cursor-pointer w-80"
        onClick={() => setShowDetail(_id)}
      />

      <p className="my-2 text-center text-gray-300">{title}</p>

      {showDetail === _id && (
        <div className="absolute top-0 md:top-72 left-0 right-0 m-auto z-10 grid w-full md:w-[1200px] h-auto p-3 text-black bg-[#292929] md:grid-cols-2 gap-x-12">
          <div>
            <img
              src={urlFor(image).url()}
              alt={title}
              className="max-h-[400px] min-w-full"
            />
            <div className="flex justify-center my-4 space-x-3">
              {linkToBuild != null && (
                <a
                  href={linkToBuild}
                  className="flex items-center px-4 py-2 space-x-3 border rounded-full border-[#0045FA] text-md dark:bg-dark-200 cursor-pointer"
                >
                  <AiFillGithub color="#0045FA" />{" "}
                  <span className="text-[#0045FA] text-xs md:text-md">
                    Github
                  </span>
                </a>
              )}
              {linkToDeploy != null && (
                <a
                  href={linkToDeploy}
                  className="flex items-center px-4 py-2 space-x-3 border rounded-full border-[#0045FA] text-md dark:bg-dark-200 cursor-pointer"
                >
                  <AiFillProject color="#0045FA" />{" "}
                  <span className="text-[#0045FA] md:text-md text-xs">
                    Project
                  </span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h2 className="mb-3 overflow-scroll text-xl font-medium text-gray-300 md:text-2xl">
              {title}
            </h2>
            <h3 className="mb-3 overflow-scroll text-sm text-gray-300 md:font-medium max-h-32 md:max-h-64 scrollbar-none">
              {summary}
            </h3>

            <h3 className="font-medium text-gray-300">Technologies :</h3>
            <div className="flex flex-wrap mt-2 space-x-2 text-sm tracking-wider">
              {technologies.map((tech) => (
                <span key={tech._id}>
                  <img
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    className="m-1 rounded-full w-7 h-7 md:w-9 md:h-9"
                  />
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
