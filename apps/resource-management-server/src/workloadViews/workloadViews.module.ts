import { Module } from "@nestjs/common";
import { WorkloadViewsModuleBase } from "./base/workloadViews.module.base";
import { WorkloadViewsService } from "./workloadViews.service";
import { WorkloadViewsController } from "./workloadViews.controller";
import { WorkloadViewsResolver } from "./workloadViews.resolver";

@Module({
  imports: [WorkloadViewsModuleBase],
  controllers: [WorkloadViewsController],
  providers: [WorkloadViewsService, WorkloadViewsResolver],
  exports: [WorkloadViewsService],
})
export class WorkloadViewsModule {}
