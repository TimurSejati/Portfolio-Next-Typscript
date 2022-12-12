import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Quotes } from "../../typing";

const query = groq`
	*[_type == "quotes"]
`;

type Data = {
  quotes: Quotes[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const quotes: Quotes[] = await sanityClient.fetch(query);

  res.status(200).json({ quotes });
}
