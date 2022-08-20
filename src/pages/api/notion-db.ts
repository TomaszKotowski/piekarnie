import type { NextApiRequest, NextApiResponse } from "next";

import { notion } from "@/server/notion/client";
import { getBakeryData } from "@/utils/notion";

const databaseId = process.env.NOTION_DATABASE_ID as string;

const notionDB = async (req: NextApiRequest, res: NextApiResponse) => {
  const notionData = await notion.databases
    .query({ database_id: databaseId })
    .then((res) => res.results);

  const pagesIds = notionData.map(({ id }) => id);

  const response = await Promise.all(
    pagesIds.map(async (id) => {
      return await getBakeryData(id);
    }),
  );

  return res.status(200).json({ response });
};

export default notionDB;
