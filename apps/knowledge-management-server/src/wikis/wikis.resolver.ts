import * as graphql from "@nestjs/graphql";
import { WikisResolverBase } from "./base/wikis.resolver.base";
import { Wikis } from "./base/Wikis";
import { WikisService } from "./wikis.service";

@graphql.Resolver(() => Wikis)
export class WikisResolver extends WikisResolverBase {
  constructor(protected readonly service: WikisService) {
    super(service);
  }
}
