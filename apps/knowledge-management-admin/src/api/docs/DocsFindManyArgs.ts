import { DocsWhereInput } from "./DocsWhereInput";
import { DocsOrderByInput } from "./DocsOrderByInput";

export type DocsFindManyArgs = {
  where?: DocsWhereInput;
  orderBy?: Array<DocsOrderByInput>;
  skip?: number;
  take?: number;
};
