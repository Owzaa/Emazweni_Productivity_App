import * as graphql from "@nestjs/graphql";
import { BoardViewsResolverBase } from "./base/boardViews.resolver.base";
import { BoardViews } from "./base/BoardViews";
import { BoardViewsService } from "./boardViews.service";

@graphql.Resolver(() => BoardViews)
export class BoardViewsResolver extends BoardViewsResolverBase {
  constructor(protected readonly service: BoardViewsService) {
    super(service);
  }
}
