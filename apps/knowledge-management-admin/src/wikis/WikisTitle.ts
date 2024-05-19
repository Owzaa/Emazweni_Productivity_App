import { Wikis as TWikis } from "../api/wikis/Wikis";

export const WIKIS_TITLE_FIELD = "id";

export const WikisTitle = (record: TWikis): string => {
  return record.id?.toString() || String(record.id);
};
