import { RoadmapBacklog as TRoadmapBacklog } from "../api/roadmapBacklog/RoadmapBacklog";

export const ROADMAPBACKLOG_TITLE_FIELD = "id";

export const RoadmapBacklogTitle = (record: TRoadmapBacklog): string => {
  return record.id?.toString() || String(record.id);
};
