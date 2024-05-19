import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KanbanService } from "./kanban.service";
import { KanbanControllerBase } from "./base/kanban.controller.base";

@swagger.ApiTags("kanbans")
@common.Controller("kanbans")
export class KanbanController extends KanbanControllerBase {
  constructor(protected readonly service: KanbanService) {
    super(service);
  }
}
