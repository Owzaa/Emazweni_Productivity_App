import { Kanban as TKanban } from "../api/kanban/Kanban";

export const KANBAN_TITLE_FIELD = "id";

export const KanbanTitle = (record: TKanban): string => {
  return record.id?.toString() || String(record.id);
};
