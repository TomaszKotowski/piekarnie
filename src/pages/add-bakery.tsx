import React from "react";

import { Nav } from "@/components/nav";
import { addBakerySchema } from "@/types/bakery";
import { trpc } from "@/utils/trpc";

function AddBakery() {
  const { mutate } = trpc.useMutation(["bakery.addBakery"]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = addBakerySchema.parse(formData);

    mutate({
      ...data,
      address: "",
      socialMediaLinks: { facebook: "#", instagram: "#", webpage: "#" },
    });
  };

  return (
    <>
      <Nav />
      <div className="flex mx-auto w-3/4 justify-center items-center">
        <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name">Nazwa piekarni: </label>
          <input
            className="w-full p-4 pr-12 text-sm border-1 border-solid border-gray-700 rounded-lg shadow-sm"
            type="text"
            name="name"
            id="name"
            placeholder="Nazwa"
          />
          <label htmlFor="info">Info o piekarni</label>
          <input
            className="w-full p-4 pr-12 text-sm border-1 border-solid border-gray-700 rounded-lg shadow-sm"
            type="text"
            name="info"
            id="info"
            placeholder="Info"
          />
          <button type="submit">Sub</button>
        </form>
      </div>
    </>
  );
}

export default AddBakery;
