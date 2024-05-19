import * as graphql from "@nestjs/graphql";
import { GanttChartsResolverBase } from "./base/ganttCharts.resolver.base";
import { GanttCharts } from "./base/GanttCharts";
import { GanttChartsService } from "./ganttCharts.service";

@graphql.Resolver(() => GanttCharts)
export class GanttChartsResolver extends GanttChartsResolverBase {
  constructor(protected readonly service: GanttChartsService) {
    super(service);
  }
}
