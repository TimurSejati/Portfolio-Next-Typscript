import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../typing";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <section id="skills" className="pb-32 bg-slate-100 pt-36 dark:bg-slate-700">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Skills</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Technology & Tools
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Technology & tools based on learning experience, things I like and
              use for work
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
