import { Docs as TDocs } from "../api/docs/Docs";

export const DOCS_TITLE_FIELD = "id";

export const DocsTitle = (record: TDocs): string => {
  return record.id?.toString() || String(record.id);
};
