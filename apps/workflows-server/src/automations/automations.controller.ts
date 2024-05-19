import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AutomationsService } from "./automations.service";
import { AutomationsControllerBase } from "./base/automations.controller.base";

@swagger.ApiTags("automations")
@common.Controller("automations")
export class AutomationsController extends AutomationsControllerBase {
  constructor(protected readonly service: AutomationsService) {
    super(service);
  }
}
