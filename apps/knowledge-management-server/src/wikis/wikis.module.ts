import { Module } from "@nestjs/common";
import { WikisModuleBase } from "./base/wikis.module.base";
import { WikisService } from "./wikis.service";
import { WikisController } from "./wikis.controller";
import { WikisResolver } from "./wikis.resolver";

@Module({
  imports: [WikisModuleBase],
  controllers: [WikisController],
  providers: [WikisService, WikisResolver],
  exports: [WikisService],
})
export class WikisModule {}
