import { Sprints as TSprints } from "../api/sprints/Sprints";

export const SPRINTS_TITLE_FIELD = "id";

export const SprintsTitle = (record: TSprints): string => {
  return record.id?.toString() || String(record.id);
};
