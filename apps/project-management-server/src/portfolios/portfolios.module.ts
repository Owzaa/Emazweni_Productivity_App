import { Module } from "@nestjs/common";
import { PortfoliosModuleBase } from "./base/portfolios.module.base";
import { PortfoliosService } from "./portfolios.service";
import { PortfoliosController } from "./portfolios.controller";
import { PortfoliosResolver } from "./portfolios.resolver";

@Module({
  imports: [PortfoliosModuleBase],
  controllers: [PortfoliosController],
  providers: [PortfoliosService, PortfoliosResolver],
  exports: [PortfoliosService],
})
export class PortfoliosModule {}
