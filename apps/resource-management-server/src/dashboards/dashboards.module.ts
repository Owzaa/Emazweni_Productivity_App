import { Module } from "@nestjs/common";
import { DashboardsModuleBase } from "./base/dashboards.module.base";
import { DashboardsService } from "./dashboards.service";
import { DashboardsController } from "./dashboards.controller";
import { DashboardsResolver } from "./dashboards.resolver";

@Module({
  imports: [DashboardsModuleBase],
  controllers: [DashboardsController],
  providers: [DashboardsService, DashboardsResolver],
  exports: [DashboardsService],
})
export class DashboardsModule {}
