import { ApiIntegration as TApiIntegration } from "../api/apiIntegration/ApiIntegration";

export const APIINTEGRATION_TITLE_FIELD = "id";

export const ApiIntegrationTitle = (record: TApiIntegration): string => {
  return record.id?.toString() || String(record.id);
};
