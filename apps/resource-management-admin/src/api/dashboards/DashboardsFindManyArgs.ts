import { DashboardsWhereInput } from "./DashboardsWhereInput";
import { DashboardsOrderByInput } from "./DashboardsOrderByInput";

export type DashboardsFindManyArgs = {
  where?: DashboardsWhereInput;
  orderBy?: Array<DashboardsOrderByInput>;
  skip?: number;
  take?: number;
};
