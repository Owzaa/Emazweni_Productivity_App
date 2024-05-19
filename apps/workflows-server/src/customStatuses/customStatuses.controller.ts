import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomStatusesService } from "./customStatuses.service";
import { CustomStatusesControllerBase } from "./base/customStatuses.controller.base";

@swagger.ApiTags("customStatuses")
@common.Controller("customStatuses")
export class CustomStatusesController extends CustomStatusesControllerBase {
  constructor(protected readonly service: CustomStatusesService) {
    super(service);
  }
}
