import { GoalsWhereInput } from "./GoalsWhereInput";
import { GoalsOrderByInput } from "./GoalsOrderByInput";

export type GoalsFindManyArgs = {
  where?: GoalsWhereInput;
  orderBy?: Array<GoalsOrderByInput>;
  skip?: number;
  take?: number;
};
