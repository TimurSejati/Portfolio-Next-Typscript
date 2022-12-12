import { Quotes } from "../typing";

export const fetchQuotes = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getQuotes`);

  const data = await res.json();
  const quotes: Quotes[] = data.quotes;

  return quotes;
};
