import { SprintReports as TSprintReports } from "../api/sprintReports/SprintReports";

export const SPRINTREPORTS_TITLE_FIELD = "id";

export const SprintReportsTitle = (record: TSprintReports): string => {
  return record.id?.toString() || String(record.id);
};
