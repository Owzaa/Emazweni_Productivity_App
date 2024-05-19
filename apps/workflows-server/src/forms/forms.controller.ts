import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormsService } from "./forms.service";
import { FormsControllerBase } from "./base/forms.controller.base";

@swagger.ApiTags("forms")
@common.Controller("forms")
export class FormsController extends FormsControllerBase {
  constructor(protected readonly service: FormsService) {
    super(service);
  }
}
