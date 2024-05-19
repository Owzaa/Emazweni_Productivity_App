import { CollaborationDocs as TCollaborationDocs } from "../api/collaborationDocs/CollaborationDocs";

export const COLLABORATIONDOCS_TITLE_FIELD = "id";

export const CollaborationDocsTitle = (record: TCollaborationDocs): string => {
  return record.id?.toString() || String(record.id);
};
