import * as graphql from "@nestjs/graphql";
import { PortfoliosResolverBase } from "./base/portfolios.resolver.base";
import { Portfolios } from "./base/Portfolios";
import { PortfoliosService } from "./portfolios.service";

@graphql.Resolver(() => Portfolios)
export class PortfoliosResolver extends PortfoliosResolverBase {
  constructor(protected readonly service: PortfoliosService) {
    super(service);
  }
}
