import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PortfoliosService } from "./portfolios.service";
import { PortfoliosControllerBase } from "./base/portfolios.controller.base";

@swagger.ApiTags("portfolios")
@common.Controller("portfolios")
export class PortfoliosController extends PortfoliosControllerBase {
  constructor(protected readonly service: PortfoliosService) {
    super(service);
  }
}
