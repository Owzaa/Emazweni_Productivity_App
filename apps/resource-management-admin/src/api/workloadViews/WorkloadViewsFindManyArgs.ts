import { WorkloadViewsWhereInput } from "./WorkloadViewsWhereInput";
import { WorkloadViewsOrderByInput } from "./WorkloadViewsOrderByInput";

export type WorkloadViewsFindManyArgs = {
  where?: WorkloadViewsWhereInput;
  orderBy?: Array<WorkloadViewsOrderByInput>;
  skip?: number;
  take?: number;
};
