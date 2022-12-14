import React, { FunctionComponent, useState } from "react";
import { motion } from "framer-motion";
import { Category, Project } from "../typing";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typing";
import Skill from "./Skill";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const [projectsData, setProjectsData] = useState(projects);
  const [active, setActive] = useState("All");
  const [showDetail, setShowDetail] = useState<string | null>(null);

  const handlerFilterCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjectsData(projects);
      setActive(category);
      return;
    }

    let newArray: any = [];
    projects.filter((project) => {
      if (project.categories.includes(category)) {
        newArray.push(project);
      }
    });

    setProjectsData(newArray);
    setActive(category);
  };

  return (
    <div className="relative z-0 flex flex-col items-center h-auto max-w-full mx-auto space-y-32 overflow-hidden text-left md:h-screen md:space-y-52">
      <h3 className="absolute top-8 md:top-14 uppercase tracking-[20px] text-gray-500 text-md md:text-2xl z-10 space-y-4">
        Portofolio
      </h3>

      <div className="flex flex-col items-center justify-start">
        <div className="absolute z-10 text-sm text-gray-500 uppercase top-20 md:top-32">
          <ProjectsNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
          />
        </div>

        <div className="overflow-y-scroll max-h-[600px] md:max-h-[600px]">
          <div className="grid grid-cols-2 gap-4 my-3 md:grid-cols-12">
            {projectsData.map((project) => (
              <div
                key={project.title}
                className="col-span-12 p-2 bg-white rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              >
                <ProjectCard
                  project={project}
                  showDetail={showDetail}
                  setShowDetail={setShowDetail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const NavItem: FunctionComponent<{
  value: Category | "All";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "cursor-pointer capitalise hover:text-green heroButton";
  if (active == value) className += " heroButtonActive";

  return (
    <button className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </button>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="Web" {...props} />
      <NavItem value="Mobile" {...props} />
      <NavItem value="Design" {...props} />
    </div>
  );
};

export default Projects;
