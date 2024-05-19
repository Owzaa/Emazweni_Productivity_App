import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BoardViewsService } from "./boardViews.service";
import { BoardViewsControllerBase } from "./base/boardViews.controller.base";

@swagger.ApiTags("boardViews")
@common.Controller("boardViews")
export class BoardViewsController extends BoardViewsControllerBase {
  constructor(protected readonly service: BoardViewsService) {
    super(service);
  }
}
