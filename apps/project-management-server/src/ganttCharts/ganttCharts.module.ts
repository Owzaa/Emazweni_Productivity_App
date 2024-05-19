import { Module } from "@nestjs/common";
import { GanttChartsModuleBase } from "./base/ganttCharts.module.base";
import { GanttChartsService } from "./ganttCharts.service";
import { GanttChartsController } from "./ganttCharts.controller";
import { GanttChartsResolver } from "./ganttCharts.resolver";

@Module({
  imports: [GanttChartsModuleBase],
  controllers: [GanttChartsController],
  providers: [GanttChartsService, GanttChartsResolver],
  exports: [GanttChartsService],
})
export class GanttChartsModule {}
