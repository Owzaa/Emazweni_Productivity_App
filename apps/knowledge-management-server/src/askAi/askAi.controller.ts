import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AskAiService } from "./askAi.service";
import { AskAiControllerBase } from "./base/askAi.controller.base";

@swagger.ApiTags("askAis")
@common.Controller("askAis")
export class AskAiController extends AskAiControllerBase {
  constructor(protected readonly service: AskAiService) {
    super(service);
  }
}
