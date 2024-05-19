import { Module } from "@nestjs/common";
import { CustomFieldsModuleBase } from "./base/customFields.module.base";
import { CustomFieldsService } from "./customFields.service";
import { CustomFieldsController } from "./customFields.controller";
import { CustomFieldsResolver } from "./customFields.resolver";

@Module({
  imports: [CustomFieldsModuleBase],
  controllers: [CustomFieldsController],
  providers: [CustomFieldsService, CustomFieldsResolver],
  exports: [CustomFieldsService],
})
export class CustomFieldsModule {}
