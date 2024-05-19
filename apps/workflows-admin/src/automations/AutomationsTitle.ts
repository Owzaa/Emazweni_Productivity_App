import { Automations as TAutomations } from "../api/automations/Automations";

export const AUTOMATIONS_TITLE_FIELD = "id";

export const AutomationsTitle = (record: TAutomations): string => {
  return record.id?.toString() || String(record.id);
};
