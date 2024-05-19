import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UniversalSearchService } from "./universalSearch.service";
import { UniversalSearchControllerBase } from "./base/universalSearch.controller.base";

@swagger.ApiTags("universalSearches")
@common.Controller("universalSearches")
export class UniversalSearchController extends UniversalSearchControllerBase {
  constructor(protected readonly service: UniversalSearchService) {
    super(service);
  }
}
