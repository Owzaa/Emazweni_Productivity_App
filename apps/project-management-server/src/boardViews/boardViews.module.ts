import { Module } from "@nestjs/common";
import { BoardViewsModuleBase } from "./base/boardViews.module.base";
import { BoardViewsService } from "./boardViews.service";
import { BoardViewsController } from "./boardViews.controller";
import { BoardViewsResolver } from "./boardViews.resolver";

@Module({
  imports: [BoardViewsModuleBase],
  controllers: [BoardViewsController],
  providers: [BoardViewsService, BoardViewsResolver],
  exports: [BoardViewsService],
})
export class BoardViewsModule {}
