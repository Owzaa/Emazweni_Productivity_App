import { Module } from "@nestjs/common";
import { RoadmapBacklogModuleBase } from "./base/roadmapBacklog.module.base";
import { RoadmapBacklogService } from "./roadmapBacklog.service";
import { RoadmapBacklogController } from "./roadmapBacklog.controller";
import { RoadmapBacklogResolver } from "./roadmapBacklog.resolver";

@Module({
  imports: [RoadmapBacklogModuleBase],
  controllers: [RoadmapBacklogController],
  providers: [RoadmapBacklogService, RoadmapBacklogResolver],
  exports: [RoadmapBacklogService],
})
export class RoadmapBacklogModule {}
