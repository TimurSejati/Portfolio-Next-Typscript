import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Social } from "../typing";

export const fetchSocials = async () => {
  const query = groq`
	*[_type == "social"]
`;

  const socials = await sanityClient.fetch(query);
  return socials;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  // const data = await res.json();
  // const socials: Social[] = data.socials;
  // return socials;
};
