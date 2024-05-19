import { Module } from "@nestjs/common";
import { TimeTrackingModuleBase } from "./base/timeTracking.module.base";
import { TimeTrackingService } from "./timeTracking.service";
import { TimeTrackingController } from "./timeTracking.controller";
import { TimeTrackingResolver } from "./timeTracking.resolver";

@Module({
  imports: [TimeTrackingModuleBase],
  controllers: [TimeTrackingController],
  providers: [TimeTrackingService, TimeTrackingResolver],
  exports: [TimeTrackingService],
})
export class TimeTrackingModule {}
