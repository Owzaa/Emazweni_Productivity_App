import { Module } from "@nestjs/common";
import { UniversalSearchModuleBase } from "./base/universalSearch.module.base";
import { UniversalSearchService } from "./universalSearch.service";
import { UniversalSearchController } from "./universalSearch.controller";
import { UniversalSearchResolver } from "./universalSearch.resolver";

@Module({
  imports: [UniversalSearchModuleBase],
  controllers: [UniversalSearchController],
  providers: [UniversalSearchService, UniversalSearchResolver],
  exports: [UniversalSearchService],
})
export class UniversalSearchModule {}
