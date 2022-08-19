import { inferQueryOutput } from "@/utils/trpc";

import { BreadIcon } from "./icons/bread";
import { FacebookIcon } from "./icons/facebook";
import { GlobeIcon } from "./icons/globe";
import { InstagramIcon } from "./icons/instagram";

type Bakery = inferQueryOutput<"bakery.getFirst">;

export function Card({
  name = "",
  info = "",
  address = "",
  socialMediaLinks,
}: Omit<NonNullable<Bakery>, "id" | "socialMediaLinksId">) {
  return (
    <div>
      <a
        className="relative block p-8 border border-gray-100 shadow-xl rounded-xl bg-gray-50"
        href=""
      >
        <div className="mt-4 text-gray-500 sm:pr-8">
          <BreadIcon className="w-8 h-8 sm:w-10 sm:h-10" />

          <h5 className="mt-4 text-xl font-bold text-gray-900">{name}</h5>

          <p className="mt-2 text-sm sm:block">{info}</p>
          <p className="mt-2 text-sm sm:block">{address}</p>
          <div className="flex space-x-2 items-center pt-2">
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="w-8 h-8" />
            </a>
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
            <a
              href={socialMediaLinks.webpage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}
