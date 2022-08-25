import { trpc } from "@/utils/trpc";

import { Card } from "../card";

export function BakeriesList() {
  const { data: bakeries } = trpc.useQuery(["bakery.getAll"]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3 my-3">
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
