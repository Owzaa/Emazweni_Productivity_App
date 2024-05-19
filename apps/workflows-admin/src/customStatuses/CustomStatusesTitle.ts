import { CustomStatuses as TCustomStatuses } from "../api/customStatuses/CustomStatuses";

export const CUSTOMSTATUSES_TITLE_FIELD = "id";

export const CustomStatusesTitle = (record: TCustomStatuses): string => {
  return record.id?.toString() || String(record.id);
};
