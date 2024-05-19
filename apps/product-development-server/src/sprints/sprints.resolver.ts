import * as graphql from "@nestjs/graphql";
import { SprintsResolverBase } from "./base/sprints.resolver.base";
import { Sprints } from "./base/Sprints";
import { SprintsService } from "./sprints.service";

@graphql.Resolver(() => Sprints)
export class SprintsResolver extends SprintsResolverBase {
  constructor(protected readonly service: SprintsService) {
    super(service);
  }
}
