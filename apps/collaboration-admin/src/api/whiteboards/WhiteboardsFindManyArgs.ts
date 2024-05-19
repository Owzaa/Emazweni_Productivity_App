import { WhiteboardsWhereInput } from "./WhiteboardsWhereInput";
import { WhiteboardsOrderByInput } from "./WhiteboardsOrderByInput";

export type WhiteboardsFindManyArgs = {
  where?: WhiteboardsWhereInput;
  orderBy?: Array<WhiteboardsOrderByInput>;
  skip?: number;
  take?: number;
};
