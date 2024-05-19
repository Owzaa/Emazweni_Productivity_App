import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InboxService } from "./inbox.service";
import { InboxControllerBase } from "./base/inbox.controller.base";

@swagger.ApiTags("inboxes")
@common.Controller("inboxes")
export class InboxController extends InboxControllerBase {
  constructor(protected readonly service: InboxService) {
    super(service);
  }
}
