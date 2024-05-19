import { Tasks as TTasks } from "../api/tasks/Tasks";

export const TASKS_TITLE_FIELD = "id";

export const TasksTitle = (record: TTasks): string => {
  return record.id?.toString() || String(record.id);
};
