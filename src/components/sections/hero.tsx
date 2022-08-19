import React from "react";

export function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="py-32 mx-auto lg:h-full lg:items-center lg:flex">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Piekarnie Rzemieślnicze
          </h1>

          <p className="mt-4 sm:leading-relaxed sm:text-xl">
            List piekarni rzemieślniczych.
          </p>
        </div>
      </div>
    </section>
  );
}
