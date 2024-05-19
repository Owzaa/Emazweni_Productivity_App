import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocsService } from "./docs.service";
import { DocsControllerBase } from "./base/docs.controller.base";

@swagger.ApiTags("docs")
@common.Controller("docs")
export class DocsController extends DocsControllerBase {
  constructor(protected readonly service: DocsService) {
    super(service);
  }
}
