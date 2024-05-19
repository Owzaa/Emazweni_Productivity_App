import * as graphql from "@nestjs/graphql";
import { DocsResolverBase } from "./base/docs.resolver.base";
import { Docs } from "./base/Docs";
import { DocsService } from "./docs.service";

@graphql.Resolver(() => Docs)
export class DocsResolver extends DocsResolverBase {
  constructor(protected readonly service: DocsService) {
    super(service);
  }
}
