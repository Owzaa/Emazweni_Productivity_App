import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DashboardsService } from "./dashboards.service";
import { DashboardsControllerBase } from "./base/dashboards.controller.base";

@swagger.ApiTags("dashboards")
@common.Controller("dashboards")
export class DashboardsController extends DashboardsControllerBase {
  constructor(protected readonly service: DashboardsService) {
    super(service);
  }
}
