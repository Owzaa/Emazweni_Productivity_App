import { Module } from "@nestjs/common";
import { WhiteboardsModuleBase } from "./base/whiteboards.module.base";
import { WhiteboardsService } from "./whiteboards.service";
import { WhiteboardsController } from "./whiteboards.controller";
import { WhiteboardsResolver } from "./whiteboards.resolver";

@Module({
  imports: [WhiteboardsModuleBase],
  controllers: [WhiteboardsController],
  providers: [WhiteboardsService, WhiteboardsResolver],
  exports: [WhiteboardsService],
})
export class WhiteboardsModule {}
