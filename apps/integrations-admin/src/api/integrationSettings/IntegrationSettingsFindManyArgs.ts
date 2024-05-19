import { IntegrationSettingsWhereInput } from "./IntegrationSettingsWhereInput";
import { IntegrationSettingsOrderByInput } from "./IntegrationSettingsOrderByInput";

export type IntegrationSettingsFindManyArgs = {
  where?: IntegrationSettingsWhereInput;
  orderBy?: Array<IntegrationSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
