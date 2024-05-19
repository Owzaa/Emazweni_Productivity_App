import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoadmapBacklogService } from "./roadmapBacklog.service";
import { RoadmapBacklogControllerBase } from "./base/roadmapBacklog.controller.base";

@swagger.ApiTags("roadmapBacklogs")
@common.Controller("roadmapBacklogs")
export class RoadmapBacklogController extends RoadmapBacklogControllerBase {
  constructor(protected readonly service: RoadmapBacklogService) {
    super(service);
  }
}
