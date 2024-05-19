import { RoadmapBacklogWhereInput } from "./RoadmapBacklogWhereInput";
import { RoadmapBacklogOrderByInput } from "./RoadmapBacklogOrderByInput";

export type RoadmapBacklogFindManyArgs = {
  where?: RoadmapBacklogWhereInput;
  orderBy?: Array<RoadmapBacklogOrderByInput>;
  skip?: number;
  take?: number;
};
