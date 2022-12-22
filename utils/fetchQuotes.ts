import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Quotes } from "../typing";

export const fetchQuotes = async () => {
  const query = groq`
	*[_type == "quotes"]
`;
  const quotes = await sanityClient.fetch(query);
  return quotes;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getQuotes`);

  // const data = await res.json();
  // const quotes: Quotes[] = data.quotes;

  // return quotes;
};
