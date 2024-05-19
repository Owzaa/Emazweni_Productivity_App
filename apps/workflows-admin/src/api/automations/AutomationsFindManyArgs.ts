import { AutomationsWhereInput } from "./AutomationsWhereInput";
import { AutomationsOrderByInput } from "./AutomationsOrderByInput";

export type AutomationsFindManyArgs = {
  where?: AutomationsWhereInput;
  orderBy?: Array<AutomationsOrderByInput>;
  skip?: number;
  take?: number;
};
