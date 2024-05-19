import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomFieldsService } from "./customFields.service";
import { CustomFieldsControllerBase } from "./base/customFields.controller.base";

@swagger.ApiTags("customFields")
@common.Controller("customFields")
export class CustomFieldsController extends CustomFieldsControllerBase {
  constructor(protected readonly service: CustomFieldsService) {
    super(service);
  }
}
