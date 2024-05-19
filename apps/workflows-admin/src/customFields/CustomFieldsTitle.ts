import { CustomFields as TCustomFields } from "../api/customFields/CustomFields";

export const CUSTOMFIELDS_TITLE_FIELD = "id";

export const CustomFieldsTitle = (record: TCustomFields): string => {
  return record.id?.toString() || String(record.id);
};
