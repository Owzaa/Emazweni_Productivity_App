import { BoardViews as TBoardViews } from "../api/boardViews/BoardViews";

export const BOARDVIEWS_TITLE_FIELD = "id";

export const BoardViewsTitle = (record: TBoardViews): string => {
  return record.id?.toString() || String(record.id);
};
