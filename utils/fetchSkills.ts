import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Skill } from "../typing";

export const fetchSkills = async () => {
  const query = groq`
	*[_type == "skill"]
`;

  const skills = await sanityClient.fetch(query);
  return skills;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  // const data = await res.json();
  // const skills: Skill[] = data.skills;

  // return skills;
};
