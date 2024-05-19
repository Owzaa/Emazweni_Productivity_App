import { Module } from "@nestjs/common";
import { SprintReportsModuleBase } from "./base/sprintReports.module.base";
import { SprintReportsService } from "./sprintReports.service";
import { SprintReportsController } from "./sprintReports.controller";
import { SprintReportsResolver } from "./sprintReports.resolver";

@Module({
  imports: [SprintReportsModuleBase],
  controllers: [SprintReportsController],
  providers: [SprintReportsService, SprintReportsResolver],
  exports: [SprintReportsService],
})
export class SprintReportsModule {}
