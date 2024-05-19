import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WikisService } from "./wikis.service";
import { WikisControllerBase } from "./base/wikis.controller.base";

@swagger.ApiTags("wikis")
@common.Controller("wikis")
export class WikisController extends WikisControllerBase {
  constructor(protected readonly service: WikisService) {
    super(service);
  }
}
