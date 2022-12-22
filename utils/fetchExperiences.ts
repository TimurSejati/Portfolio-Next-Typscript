import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Experience } from "../typing";

export const fetchExperiences = async () => {
  const query = groq`
	*[_type == "experience"]{
    ...,
    technologies[]->
  }
`;

  const experiences = await sanityClient.fetch(query);
  return experiences;

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  // );

  // const data = await res.json();
  // const experiences: Experience[] = data.experiences;

  // return experiences;
};
