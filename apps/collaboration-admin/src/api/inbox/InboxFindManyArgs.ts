import { InboxWhereInput } from "./InboxWhereInput";
import { InboxOrderByInput } from "./InboxOrderByInput";

export type InboxFindManyArgs = {
  where?: InboxWhereInput;
  orderBy?: Array<InboxOrderByInput>;
  skip?: number;
  take?: number;
};
