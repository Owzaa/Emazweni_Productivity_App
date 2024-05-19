import { UniversalSearch as TUniversalSearch } from "../api/universalSearch/UniversalSearch";

export const UNIVERSALSEARCH_TITLE_FIELD = "id";

export const UniversalSearchTitle = (record: TUniversalSearch): string => {
  return record.id?.toString() || String(record.id);
};
