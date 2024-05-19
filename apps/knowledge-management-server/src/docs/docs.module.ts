import { Module } from "@nestjs/common";
import { DocsModuleBase } from "./base/docs.module.base";
import { DocsService } from "./docs.service";
import { DocsController } from "./docs.controller";
import { DocsResolver } from "./docs.resolver";

@Module({
  imports: [DocsModuleBase],
  controllers: [DocsController],
  providers: [DocsService, DocsResolver],
  exports: [DocsService],
})
export class DocsModule {}
