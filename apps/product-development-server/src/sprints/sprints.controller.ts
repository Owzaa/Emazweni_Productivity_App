import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SprintsService } from "./sprints.service";
import { SprintsControllerBase } from "./base/sprints.controller.base";

@swagger.ApiTags("sprints")
@common.Controller("sprints")
export class SprintsController extends SprintsControllerBase {
  constructor(protected readonly service: SprintsService) {
    super(service);
  }
}
