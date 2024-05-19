import { SprintReportsWhereInput } from "./SprintReportsWhereInput";
import { SprintReportsOrderByInput } from "./SprintReportsOrderByInput";

export type SprintReportsFindManyArgs = {
  where?: SprintReportsWhereInput;
  orderBy?: Array<SprintReportsOrderByInput>;
  skip?: number;
  take?: number;
};
