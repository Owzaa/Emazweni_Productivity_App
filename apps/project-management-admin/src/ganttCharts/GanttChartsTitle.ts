import { GanttCharts as TGanttCharts } from "../api/ganttCharts/GanttCharts";

export const GANTTCHARTS_TITLE_FIELD = "id";

export const GanttChartsTitle = (record: TGanttCharts): string => {
  return record.id?.toString() || String(record.id);
};
