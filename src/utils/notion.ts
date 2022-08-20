import { notion } from "@/server/notion/client";

enum Properties {
  Instagram = "Instagram",
  Status = "Status",
  Info = "Info",
  Name = "Name",
}

export const getPropertyData = async ({
  pageId,
  property,
}: {
  pageId: string;
  property: Properties;
}) =>
  await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: property,
  });

export const getBakeryData = async (id: string) => {
  const name = await getPropertyData({
    pageId: id,
    property: Properties.Name,
    // Typing in notion seems bad
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
  }).then((data) => data?.results[0]?.title?.text?.content);

  const info = await getPropertyData({
    pageId: id,
    property: Properties.Info,
    // Typing in notion seems bad
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
  }).then((data) => data.results[0]?.rich_text?.text?.content);

  const instagram = await getPropertyData({
    pageId: id,
    property: Properties.Instagram,
    // Typing in notion seems bad
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
  }).then((data) => data?.url);

  return { id, name, info, instagram };
};
