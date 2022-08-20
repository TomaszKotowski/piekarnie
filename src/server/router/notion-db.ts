import { getBakeryData } from "@/utils/notion";

import { createRouter } from "./context";

const databaseId = process.env.NOTION_DATABASE_ID as string;

export const notionRouter = createRouter().query("getAll", {
  async resolve({ ctx }) {
    const notionData = await ctx.notion.databases
      .query({ database_id: databaseId })
      .then((res) => res.results);

    const pagesIds = notionData.map(({ id }) => id);

    const response = await Promise.all(
      pagesIds.map(async (id) => {
        return await getBakeryData(id);
      }),
    );

    return response;
  },
});
