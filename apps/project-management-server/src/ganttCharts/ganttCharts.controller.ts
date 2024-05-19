import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GanttChartsService } from "./ganttCharts.service";
import { GanttChartsControllerBase } from "./base/ganttCharts.controller.base";

@swagger.ApiTags("ganttCharts")
@common.Controller("ganttCharts")
export class GanttChartsController extends GanttChartsControllerBase {
  constructor(protected readonly service: GanttChartsService) {
    super(service);
  }
}
