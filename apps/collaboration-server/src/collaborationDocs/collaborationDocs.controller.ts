import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollaborationDocsService } from "./collaborationDocs.service";
import { CollaborationDocsControllerBase } from "./base/collaborationDocs.controller.base";

@swagger.ApiTags("collaborationDocs")
@common.Controller("collaborationDocs")
export class CollaborationDocsController extends CollaborationDocsControllerBase {
  constructor(protected readonly service: CollaborationDocsService) {
    super(service);
  }
}
