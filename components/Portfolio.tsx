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

function Portfolio({ projects }: Props) {
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
    <section
      id="portfolio"
      className="pb-32 bg-slate-100 pt-36 dark:bg-slate-700"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-5 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Project Terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Ini adalah beberapa hasil projek yang pernah saya kerjakan.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center w-full px-4 mb-10 xl:mx-auto xl:w-10/12">
          <ProjectsNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
          />
        </div>

        <div className="overflow-y-scroll max-h-[600px] md:max-h-[900px] relative">
          <div className="grid grid-cols-12 gap-4 my-3 md:grid-cols-12">
            {projectsData.map((project) => (
              <div
                key={project.title}
                className="col-span-12 p-2 bg-white shadow-lg rounded-xl dark:bg-slate-800 sm:col-span-6 lg:col-span-4 "
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
    </section>
  );
}

const NavItem: FunctionComponent<{
  value: Category | "All";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let classNameName = "cursor-pointer capitalise hover:text-green heroButton";
  if (active == value) classNameName += " heroButtonActive";

  return (
    <button
      className={classNameName}
      onClick={() => handlerFilterCategory(value)}
    >
      {value}
    </button>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none md:text-xl text-md">
      <NavItem value="All" {...props} />
      <NavItem value="Web" {...props} />
      <NavItem value="Mobile" {...props} />
      <NavItem value="Design" {...props} />
    </div>
  );
};

export default Portfolio;
