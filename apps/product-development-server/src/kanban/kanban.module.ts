import { Module } from "@nestjs/common";
import { KanbanModuleBase } from "./base/kanban.module.base";
import { KanbanService } from "./kanban.service";
import { KanbanController } from "./kanban.controller";
import { KanbanResolver } from "./kanban.resolver";

@Module({
  imports: [KanbanModuleBase],
  controllers: [KanbanController],
  providers: [KanbanService, KanbanResolver],
  exports: [KanbanService],
})
export class KanbanModule {}
