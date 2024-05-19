import * as graphql from "@nestjs/graphql";
import { DashboardsResolverBase } from "./base/dashboards.resolver.base";
import { Dashboards } from "./base/Dashboards";
import { DashboardsService } from "./dashboards.service";

@graphql.Resolver(() => Dashboards)
export class DashboardsResolver extends DashboardsResolverBase {
  constructor(protected readonly service: DashboardsService) {
    super(service);
  }
}
