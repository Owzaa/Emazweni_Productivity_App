import * as graphql from "@nestjs/graphql";
import { GoalsResolverBase } from "./base/goals.resolver.base";
import { Goals } from "./base/Goals";
import { GoalsService } from "./goals.service";

@graphql.Resolver(() => Goals)
export class GoalsResolver extends GoalsResolverBase {
  constructor(protected readonly service: GoalsService) {
    super(service);
  }
}
