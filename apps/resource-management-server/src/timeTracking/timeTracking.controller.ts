import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeTrackingService } from "./timeTracking.service";
import { TimeTrackingControllerBase } from "./base/timeTracking.controller.base";

@swagger.ApiTags("timeTrackings")
@common.Controller("timeTrackings")
export class TimeTrackingController extends TimeTrackingControllerBase {
  constructor(protected readonly service: TimeTrackingService) {
    super(service);
  }
}
