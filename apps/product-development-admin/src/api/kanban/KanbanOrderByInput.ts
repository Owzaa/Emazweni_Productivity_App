import { SortOrder } from "../../util/SortOrder";

export type KanbanOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
