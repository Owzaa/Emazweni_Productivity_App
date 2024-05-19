import { Module } from "@nestjs/common";
import { AutomationsModuleBase } from "./base/automations.module.base";
import { AutomationsService } from "./automations.service";
import { AutomationsController } from "./automations.controller";
import { AutomationsResolver } from "./automations.resolver";

@Module({
  imports: [AutomationsModuleBase],
  controllers: [AutomationsController],
  providers: [AutomationsService, AutomationsResolver],
  exports: [AutomationsService],
})
export class AutomationsModule {}
