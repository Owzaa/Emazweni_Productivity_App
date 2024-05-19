import { SprintsWhereInput } from "./SprintsWhereInput";
import { SprintsOrderByInput } from "./SprintsOrderByInput";

export type SprintsFindManyArgs = {
  where?: SprintsWhereInput;
  orderBy?: Array<SprintsOrderByInput>;
  skip?: number;
  take?: number;
};
