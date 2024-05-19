import { GanttChartsWhereInput } from "./GanttChartsWhereInput";
import { GanttChartsOrderByInput } from "./GanttChartsOrderByInput";

export type GanttChartsFindManyArgs = {
  where?: GanttChartsWhereInput;
  orderBy?: Array<GanttChartsOrderByInput>;
  skip?: number;
  take?: number;
};
