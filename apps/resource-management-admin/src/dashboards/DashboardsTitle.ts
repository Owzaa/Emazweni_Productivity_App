import { Dashboards as TDashboards } from "../api/dashboards/Dashboards";

export const DASHBOARDS_TITLE_FIELD = "id";

export const DashboardsTitle = (record: TDashboards): string => {
  return record.id?.toString() || String(record.id);
};
