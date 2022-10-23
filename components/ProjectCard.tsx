import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import Image from "next/image";
import { Project } from "../typing";
import { urlFor } from "../sanity";

const ProjectCard: FunctionComponent<{
  project: Project;
}> = ({
  project: { title, image, linkToBuild, linkToDeploy, summary, technologies },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <img
        src={urlFor(image).url()}
        alt={title}
        className="h-56 cursor-pointer w-80"
        onClick={() => setShowDetail(true)}
      />

      <p className="my-2 text-center text-gray-500">{title}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-3 text-black bg-[#292929] md:grid-cols-2 gap-x-12">
          <div>
            <img src={urlFor(image).url()} alt={title} />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={linkToBuild}
                className="flex items-center px-4 py-2 space-x-3 border rounded-full border-[#F7AB0A] text-md dark:bg-dark-200 cursor-pointer"
              >
                <AiFillGithub color="#F7AB0A" />{" "}
                <span className="text-[#F7AB0A] text-xs md:text-md">
                  Github
                </span>
              </a>
              <a
                href={linkToDeploy}
                className="flex items-center px-4 py-2 space-x-3 border rounded-full border-[#F7AB0A] text-md dark:bg-dark-200 cursor-pointer"
              >
                <AiFillProject color="#F7AB0A" />{" "}
                <span className="text-[#F7AB0A] md:text-md text-xs">
                  Project
                </span>
              </a>
            </div>
          </div>

          <div className="">
            <h2 className="mb-3 overflow-scroll text-xl font-medium text-gray-300 md:text-2xl">
              {title}
            </h2>
            <h3 className="mb-3 overflow-scroll text-sm text-gray-300 md:font-medium max-h-60 md:max-h-72 scrollbar-none">
              {summary}
            </h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {technologies.map((tech) => (
                <span key={tech._id}>
                  {/* {tech.title} */}
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
            onClick={() => setShowDetail(false)}
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
