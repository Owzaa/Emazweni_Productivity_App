import { Module } from "@nestjs/common";
import { CustomStatusesModuleBase } from "./base/customStatuses.module.base";
import { CustomStatusesService } from "./customStatuses.service";
import { CustomStatusesController } from "./customStatuses.controller";
import { CustomStatusesResolver } from "./customStatuses.resolver";

@Module({
  imports: [CustomStatusesModuleBase],
  controllers: [CustomStatusesController],
  providers: [CustomStatusesService, CustomStatusesResolver],
  exports: [CustomStatusesService],
})
export class CustomStatusesModule {}
