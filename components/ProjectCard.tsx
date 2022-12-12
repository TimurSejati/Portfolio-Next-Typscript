import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import Image from "next/image";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import ModalPortofolio from "./ModalPortofolio";

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
    <div>
      <Image
        src={urlFor(image).url()}
        alt={title}
        width="500px"
        height="320px"
        style={{ cursor: "pointer" }}
        onClick={() => setShowDetail(_id)}
      />

      <p className="justify-center py-1 text-sm font-medium text-center text-white rounded-bl-md rounded-br-md bg-primary hover:opacity-80">
        {title}
      </p>

      {showDetail === _id && (
        <>
          <div className="fixed inset-0 z-50 mx-4 mt-24 md:mx-6 md:-mt-36">
            <div className="absolute top-0 left-0 right-0 z-10 grid w-full h-auto p-3 m-auto text-black lg:w-[1200px] bg-white shadow-lg md:top-72 rounded-xl dark:bg-slate-800 md:grid-cols-2 gap-x-12 z-999">
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
                      className="flex items-center px-4 py-2 space-x-3 rounded-full cursor-pointer bg-primary text-md dark:bg-dark-200"
                    >
                      <AiFillGithub color="#fff" />{" "}
                      <span className="text-xs text-white md:text-md">
                        Github
                      </span>
                    </a>
                  )}
                  {linkToDeploy != null && (
                    <a
                      href={linkToDeploy}
                      className="flex items-center px-4 py-2 space-x-3 rounded-full cursor-pointer bg-primary text-md dark:bg-dark-200"
                    >
                      <AiFillProject color="#0045FA" />{" "}
                      <span className="text-xs text-white md:text-md">
                        Project
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h2 className="mb-3 overflow-scroll text-xl font-medium text-dark md:text-2xl dark:text-white">
                  {title}
                </h2>
                <h3 className="mb-3 overflow-scroll text-sm text-dark dark:text-white md:font-medium max-h-32 md:max-h-64 scrollbar-none">
                  {summary}
                </h3>

                <h3 className="font-medium text-dark dark:text-white">
                  Technologies :
                </h3>
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
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
