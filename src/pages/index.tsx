import type { NextPage } from "next";
import Head from "next/head";

import { Card } from "@/components/card";
import { CardsList } from "@/components/sections/cards-list";
import { Hero } from "@/components/sections/hero";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: bakeries } = trpc.useQuery(["bakery.getAll"]);

  return (
    <>
      <Head>
        <title>Piekarnie rzemieślnicze</title>
        <meta name="description" content="Lista piekarni rzemieślniczych" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col pb-10">
        <Hero />
        <CardsList />
      </main>
    </>
  );
};

export default Home;
