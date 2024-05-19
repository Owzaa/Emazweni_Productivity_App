import { SortOrder } from "../../util/SortOrder";

export type TasksOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
