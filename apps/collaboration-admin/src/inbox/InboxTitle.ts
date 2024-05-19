import { Inbox as TInbox } from "../api/inbox/Inbox";

export const INBOX_TITLE_FIELD = "id";

export const InboxTitle = (record: TInbox): string => {
  return record.id?.toString() || String(record.id);
};
