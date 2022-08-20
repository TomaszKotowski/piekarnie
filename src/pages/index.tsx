import type { NextPage } from "next";
import Head from "next/head";

import { BakeriesList } from "@/components/sections/bakeries-list";
import { Hero } from "@/components/sections/hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Piekarnie rzemieślnicze</title>
        <meta name="description" content="Lista piekarni rzemieślniczych" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col pb-10">
        <Hero />
        <BakeriesList />
      </main>
    </>
  );
};

export default Home;
