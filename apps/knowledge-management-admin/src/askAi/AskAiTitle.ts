import { AskAi as TAskAi } from "../api/askAi/AskAi";

export const ASKAI_TITLE_FIELD = "id";

export const AskAiTitle = (record: TAskAi): string => {
  return record.id?.toString() || String(record.id);
};
