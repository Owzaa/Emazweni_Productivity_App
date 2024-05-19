import { KanbanWhereInput } from "./KanbanWhereInput";
import { KanbanOrderByInput } from "./KanbanOrderByInput";

export type KanbanFindManyArgs = {
  where?: KanbanWhereInput;
  orderBy?: Array<KanbanOrderByInput>;
  skip?: number;
  take?: number;
};
