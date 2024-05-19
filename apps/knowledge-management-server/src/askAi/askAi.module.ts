import { Module } from "@nestjs/common";
import { AskAiModuleBase } from "./base/askAi.module.base";
import { AskAiService } from "./askAi.service";
import { AskAiController } from "./askAi.controller";
import { AskAiResolver } from "./askAi.resolver";

@Module({
  imports: [AskAiModuleBase],
  controllers: [AskAiController],
  providers: [AskAiService, AskAiResolver],
  exports: [AskAiService],
})
export class AskAiModule {}
