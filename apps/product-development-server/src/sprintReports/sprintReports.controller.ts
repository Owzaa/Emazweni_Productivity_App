import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SprintReportsService } from "./sprintReports.service";
import { SprintReportsControllerBase } from "./base/sprintReports.controller.base";

@swagger.ApiTags("sprintReports")
@common.Controller("sprintReports")
export class SprintReportsController extends SprintReportsControllerBase {
  constructor(protected readonly service: SprintReportsService) {
    super(service);
  }
}
