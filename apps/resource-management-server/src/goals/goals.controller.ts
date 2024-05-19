import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoalsService } from "./goals.service";
import { GoalsControllerBase } from "./base/goals.controller.base";

@swagger.ApiTags("goals")
@common.Controller("goals")
export class GoalsController extends GoalsControllerBase {
  constructor(protected readonly service: GoalsService) {
    super(service);
  }
}
