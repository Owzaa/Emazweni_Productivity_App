import * as graphql from "@nestjs/graphql";
import { AutomationsResolverBase } from "./base/automations.resolver.base";
import { Automations } from "./base/Automations";
import { AutomationsService } from "./automations.service";

@graphql.Resolver(() => Automations)
export class AutomationsResolver extends AutomationsResolverBase {
  constructor(protected readonly service: AutomationsService) {
    super(service);
  }
}
