import { inferQueryOutput } from "@/utils/trpc";

import { BreadIcon } from "./icons/bread";

type Bakery = inferQueryOutput<"bakery.getFirst">;

export function Card({
  name = "",
  info = "",
  address = "",
  socialMediaLinks,
}: Omit<NonNullable<Bakery>, "id" | "socialMediaLinksId">) {
  return (
    <div className="relative block p-8 border border-gray-100 shadow-xl rounded-xl bg-gray-50">
      <div className="mt-4 text-black sm:pr-8 flex flex-col h-full">
        <BreadIcon className="w-8 h-8 sm:w-10 sm:h-10" />

        <h5 className="mt-4 text-xl font-bold text-gray-900">{name}</h5>

        {/* <p className="mt-2 text-sm sm:block flex-1">{info}</p> */}
        <div className="mt-2 flex items-center">
          <div className="text-xl mr-2">
            <i className="ri-map-pin-line" />
          </div>
          <p className="text-sm sm:block">{address}</p>
        </div>
        <div className="flex space-x-2 items-center pt-2 justify-self-end">
          {socialMediaLinks.facebook ?? (
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-2xl">
                <i className="ri-facebook-fill" />
              </div>
            </a>
          )}
          {socialMediaLinks.instagram ?? (
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-2xl">
                <i className="ri-instagram-line" />
              </div>
            </a>
          )}
          {socialMediaLinks.webpage ?? (
            <a
              href={socialMediaLinks.webpage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-2xl">
                <i className="ri-global-line" />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
