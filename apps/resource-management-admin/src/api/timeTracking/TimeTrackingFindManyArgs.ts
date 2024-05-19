import { TimeTrackingWhereInput } from "./TimeTrackingWhereInput";
import { TimeTrackingOrderByInput } from "./TimeTrackingOrderByInput";

export type TimeTrackingFindManyArgs = {
  where?: TimeTrackingWhereInput;
  orderBy?: Array<TimeTrackingOrderByInput>;
  skip?: number;
  take?: number;
};
