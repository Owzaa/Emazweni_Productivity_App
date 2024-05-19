import { Goals as TGoals } from "../api/goals/Goals";

export const GOALS_TITLE_FIELD = "id";

export const GoalsTitle = (record: TGoals): string => {
  return record.id?.toString() || String(record.id);
};
