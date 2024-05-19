import { Module } from "@nestjs/common";
import { FormsModuleBase } from "./base/forms.module.base";
import { FormsService } from "./forms.service";
import { FormsController } from "./forms.controller";
import { FormsResolver } from "./forms.resolver";

@Module({
  imports: [FormsModuleBase],
  controllers: [FormsController],
  providers: [FormsService, FormsResolver],
  exports: [FormsService],
})
export class FormsModule {}
