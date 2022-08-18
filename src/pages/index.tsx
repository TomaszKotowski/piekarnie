import type { NextPage } from "next";
import Head from "next/head";

import { inferQueryOutput, trpc } from "../utils/trpc";

type Bakery = inferQueryOutput<"bakery.getFirst">;

const Home: NextPage = () => {
  const { data: bakeries } = trpc.useQuery(["bakery.getAll"]);

  return (
    <>
      <Head>
        <title>Piekarnie rzemieślnicze</title>
        <meta name="description" content="Lista piekarni rzemieślniczych" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex flex-col space-y-4">
          {bakeries?.map(({ id, name, info, address, socialMediaLinks }) => (
            <Card
              key={id}
              name={name}
              info={info}
              address={address}
              socialMediaLinks={socialMediaLinks}
            />
          ))}
        </div>
      </main>
    </>
  );
};

const Card = ({
  name,
  address,
  info,
  socialMediaLinks,
}: Omit<NonNullable<Bakery>, "id" | "socialMediaLinksId">) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{info}</p>
      <p className="text-sm text-gray-600">{address}</p>

      <a
        href={socialMediaLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-m text-gray-800"
      >
        Facebook
      </a>
      <a
        href={socialMediaLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href={socialMediaLinks.webpage}
        target="_blank"
        rel="noopener noreferrer"
      >
        Webpage
      </a>
    </section>
  );
};

export default Home;
