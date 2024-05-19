import { Module } from "@nestjs/common";
import { GoalsModuleBase } from "./base/goals.module.base";
import { GoalsService } from "./goals.service";
import { GoalsController } from "./goals.controller";
import { GoalsResolver } from "./goals.resolver";

@Module({
  imports: [GoalsModuleBase],
  controllers: [GoalsController],
  providers: [GoalsService, GoalsResolver],
  exports: [GoalsService],
})
export class GoalsModule {}
