import * as graphql from "@nestjs/graphql";
import { IntegrationSettingsResolverBase } from "./base/integrationSettings.resolver.base";
import { IntegrationSettings } from "./base/IntegrationSettings";
import { IntegrationSettingsService } from "./integrationSettings.service";

@graphql.Resolver(() => IntegrationSettings)
export class IntegrationSettingsResolver extends IntegrationSettingsResolverBase {
  constructor(protected readonly service: IntegrationSettingsService) {
    super(service);
  }
}
