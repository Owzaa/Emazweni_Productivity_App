import { TimeTracking as TTimeTracking } from "../api/timeTracking/TimeTracking";

export const TIMETRACKING_TITLE_FIELD = "id";

export const TimeTrackingTitle = (record: TTimeTracking): string => {
  return record.id?.toString() || String(record.id);
};
