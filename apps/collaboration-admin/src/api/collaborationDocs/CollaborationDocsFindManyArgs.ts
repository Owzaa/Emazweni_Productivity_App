import { CollaborationDocsWhereInput } from "./CollaborationDocsWhereInput";
import { CollaborationDocsOrderByInput } from "./CollaborationDocsOrderByInput";

export type CollaborationDocsFindManyArgs = {
  where?: CollaborationDocsWhereInput;
  orderBy?: Array<CollaborationDocsOrderByInput>;
  skip?: number;
  take?: number;
};
