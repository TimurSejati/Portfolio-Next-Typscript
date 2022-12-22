import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { PageInfo, Social } from "../typing";

export const fetchPageInfo = async () => {
  const query = groq`
    *[_type == "pageInfo"][0]
  `;

  const pageInfo = await sanityClient.fetch(query);
  return pageInfo;
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  // );

  // const data = await res.json();
  // const pageInfo: PageInfo = data.pageInfo;

  // return pageInfo;
};
