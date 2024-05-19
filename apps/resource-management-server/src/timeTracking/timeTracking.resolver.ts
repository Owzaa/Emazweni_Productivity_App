import * as graphql from "@nestjs/graphql";
import { TimeTrackingResolverBase } from "./base/timeTracking.resolver.base";
import { TimeTracking } from "./base/TimeTracking";
import { TimeTrackingService } from "./timeTracking.service";

@graphql.Resolver(() => TimeTracking)
export class TimeTrackingResolver extends TimeTrackingResolverBase {
  constructor(protected readonly service: TimeTrackingService) {
    super(service);
  }
}
