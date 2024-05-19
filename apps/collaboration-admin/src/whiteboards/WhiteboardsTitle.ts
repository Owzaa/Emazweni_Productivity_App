import { Whiteboards as TWhiteboards } from "../api/whiteboards/Whiteboards";

export const WHITEBOARDS_TITLE_FIELD = "id";

export const WhiteboardsTitle = (record: TWhiteboards): string => {
  return record.id?.toString() || String(record.id);
};
