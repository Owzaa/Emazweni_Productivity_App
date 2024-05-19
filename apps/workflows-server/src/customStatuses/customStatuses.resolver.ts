import * as graphql from "@nestjs/graphql";
import { CustomStatusesResolverBase } from "./base/customStatuses.resolver.base";
import { CustomStatuses } from "./base/CustomStatuses";
import { CustomStatusesService } from "./customStatuses.service";

@graphql.Resolver(() => CustomStatuses)
export class CustomStatusesResolver extends CustomStatusesResolverBase {
  constructor(protected readonly service: CustomStatusesService) {
    super(service);
  }
}
