import * as graphql from "@nestjs/graphql";
import { CollaborationDocsResolverBase } from "./base/collaborationDocs.resolver.base";
import { CollaborationDocs } from "./base/CollaborationDocs";
import { CollaborationDocsService } from "./collaborationDocs.service";

@graphql.Resolver(() => CollaborationDocs)
export class CollaborationDocsResolver extends CollaborationDocsResolverBase {
  constructor(protected readonly service: CollaborationDocsService) {
    super(service);
  }
}
