import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import {
  Experience,
  PageInfo,
  Project,
  Quotes as QuotesType,
  Skill,
  Social,
} from "../typing";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchQuotes } from "../utils/fetchQuotes";
import Portfolio from "../components/Portfolio";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  quotes: QuotesType[];
};

export const revalidate = 10;

const Home = ({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
  quotes,
}: Props) => {
  return (
    <div className="z-10 overflow-x-hidden overflow-y-scroll text-white scrollbar">
      <Head>
        <title>TimurDev Portfolio</title>
      </Head>

      <Header socials={socials} />
      <Hero pageInfo={pageInfo} socials={socials} />
      <About pageInfo={pageInfo} socials={socials} />
      <Skills skills={skills} />
      <Quotes quotes={quotes} indexQuote={1} />
      <Portfolio projects={projects} />
      {/* <Skill /> */}
      <Quotes quotes={quotes} indexQuote={2} />
      <ContactMe />
      <Footer socials={socials} />

      <a
        href="#home"
        aria-label="home"
        className="fixed bottom-2 right-4 z-[9999] hidden h-10 w-10 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse"
        id="to-top"
      >
        <span className="block w-2 h-2 mt-1 rotate-45 border-t-2 border-l-2"></span>
      </a>

      <a
        target="_blank"
        href="https://wa.me/+6289508436275"
        aria-label="whatsapp"
        className="fixed bottom-16 right-4 z-[9999] h-10 w-10 items-center justify-center rounded-full bg-green-500 p-4 hover:animate-pulse"
        rel="noreferrer"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
          className="-translate-x-1 -translate-y-1 fill-current"
        >
          <title>WhatsApp</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const quotes: QuotesType[] = await fetchQuotes();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      quotes,
    },
    revalidate: true,
  };
};
