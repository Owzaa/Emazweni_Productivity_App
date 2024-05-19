import { Module } from "@nestjs/common";
import { SprintsModuleBase } from "./base/sprints.module.base";
import { SprintsService } from "./sprints.service";
import { SprintsController } from "./sprints.controller";
import { SprintsResolver } from "./sprints.resolver";

@Module({
  imports: [SprintsModuleBase],
  controllers: [SprintsController],
  providers: [SprintsService, SprintsResolver],
  exports: [SprintsService],
})
export class SprintsModule {}
