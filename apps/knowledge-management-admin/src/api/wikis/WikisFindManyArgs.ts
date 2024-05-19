import { WikisWhereInput } from "./WikisWhereInput";
import { WikisOrderByInput } from "./WikisOrderByInput";

export type WikisFindManyArgs = {
  where?: WikisWhereInput;
  orderBy?: Array<WikisOrderByInput>;
  skip?: number;
  take?: number;
};
