import * as graphql from "@nestjs/graphql";
import { UniversalSearchResolverBase } from "./base/universalSearch.resolver.base";
import { UniversalSearch } from "./base/UniversalSearch";
import { UniversalSearchService } from "./universalSearch.service";

@graphql.Resolver(() => UniversalSearch)
export class UniversalSearchResolver extends UniversalSearchResolverBase {
  constructor(protected readonly service: UniversalSearchService) {
    super(service);
  }
}
