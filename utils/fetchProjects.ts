import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Project } from "../typing";

export const fetchProjects = async () => {
  const query = groq`
	*[_type == "project"]{
    ...,
    technologies[]->
  }
`;
  const projects = await sanityClient.fetch(query);
  return projects;
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  // );

  // const data = await res.json();
  // const projects: Project[] = data.projects;

  // return projects;
};
