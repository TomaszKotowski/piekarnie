import { trpc } from "@/utils/trpc";

import { Card } from "../card";

export function CardsList() {
  const { data: bakeries } = trpc.useQuery(["bakery.getAll"]);

  return (
    <div className="flex flex-col md:flex-row space-y-4 lg:space-x-4 px-4 lg:px-0">
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
  );
}
