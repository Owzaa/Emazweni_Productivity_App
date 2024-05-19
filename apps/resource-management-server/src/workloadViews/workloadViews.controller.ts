import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkloadViewsService } from "./workloadViews.service";
import { WorkloadViewsControllerBase } from "./base/workloadViews.controller.base";

@swagger.ApiTags("workloadViews")
@common.Controller("workloadViews")
export class WorkloadViewsController extends WorkloadViewsControllerBase {
  constructor(protected readonly service: WorkloadViewsService) {
    super(service);
  }
}
