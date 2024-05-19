import * as graphql from "@nestjs/graphql";
import { RoadmapBacklogResolverBase } from "./base/roadmapBacklog.resolver.base";
import { RoadmapBacklog } from "./base/RoadmapBacklog";
import { RoadmapBacklogService } from "./roadmapBacklog.service";

@graphql.Resolver(() => RoadmapBacklog)
export class RoadmapBacklogResolver extends RoadmapBacklogResolverBase {
  constructor(protected readonly service: RoadmapBacklogService) {
    super(service);
  }
}
