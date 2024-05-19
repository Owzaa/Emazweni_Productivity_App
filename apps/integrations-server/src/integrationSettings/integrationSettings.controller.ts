import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationSettingsService } from "./integrationSettings.service";
import { IntegrationSettingsControllerBase } from "./base/integrationSettings.controller.base";

@swagger.ApiTags("integrationSettings")
@common.Controller("integrationSettings")
export class IntegrationSettingsController extends IntegrationSettingsControllerBase {
  constructor(protected readonly service: IntegrationSettingsService) {
    super(service);
  }
}
