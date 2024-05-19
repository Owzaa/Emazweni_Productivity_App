import { IntegrationSettings as TIntegrationSettings } from "../api/integrationSettings/IntegrationSettings";

export const INTEGRATIONSETTINGS_TITLE_FIELD = "id";

export const IntegrationSettingsTitle = (
  record: TIntegrationSettings
): string => {
  return record.id?.toString() || String(record.id);
};
