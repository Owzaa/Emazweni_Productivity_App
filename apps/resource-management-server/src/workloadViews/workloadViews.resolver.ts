import * as graphql from "@nestjs/graphql";
import { WorkloadViewsResolverBase } from "./base/workloadViews.resolver.base";
import { WorkloadViews } from "./base/WorkloadViews";
import { WorkloadViewsService } from "./workloadViews.service";

@graphql.Resolver(() => WorkloadViews)
export class WorkloadViewsResolver extends WorkloadViewsResolverBase {
  constructor(protected readonly service: WorkloadViewsService) {
    super(service);
  }
}
