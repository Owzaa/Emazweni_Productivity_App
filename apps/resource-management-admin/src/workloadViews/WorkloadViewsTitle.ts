import { WorkloadViews as TWorkloadViews } from "../api/workloadViews/WorkloadViews";

export const WORKLOADVIEWS_TITLE_FIELD = "id";

export const WorkloadViewsTitle = (record: TWorkloadViews): string => {
  return record.id?.toString() || String(record.id);
};
