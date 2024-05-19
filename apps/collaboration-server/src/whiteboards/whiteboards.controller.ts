import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WhiteboardsService } from "./whiteboards.service";
import { WhiteboardsControllerBase } from "./base/whiteboards.controller.base";

@swagger.ApiTags("whiteboards")
@common.Controller("whiteboards")
export class WhiteboardsController extends WhiteboardsControllerBase {
  constructor(protected readonly service: WhiteboardsService) {
    super(service);
  }
}
