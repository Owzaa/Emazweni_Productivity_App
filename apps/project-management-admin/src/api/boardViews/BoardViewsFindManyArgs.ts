import { BoardViewsWhereInput } from "./BoardViewsWhereInput";
import { BoardViewsOrderByInput } from "./BoardViewsOrderByInput";

export type BoardViewsFindManyArgs = {
  where?: BoardViewsWhereInput;
  orderBy?: Array<BoardViewsOrderByInput>;
  skip?: number;
  take?: number;
};
