// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const bakery = async (req: NextApiRequest, res: NextApiResponse) => {
  const bakeryData = await prisma.bakery.findMany();
  return res.status(200).json(bakeryData);
};

export default bakery;
