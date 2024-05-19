import { Module } from "@nestjs/common";
import { IntegrationSettingsModuleBase } from "./base/integrationSettings.module.base";
import { IntegrationSettingsService } from "./integrationSettings.service";
import { IntegrationSettingsController } from "./integrationSettings.controller";
import { IntegrationSettingsResolver } from "./integrationSettings.resolver";

@Module({
  imports: [IntegrationSettingsModuleBase],
  controllers: [IntegrationSettingsController],
  providers: [IntegrationSettingsService, IntegrationSettingsResolver],
  exports: [IntegrationSettingsService],
})
export class IntegrationSettingsModule {}
