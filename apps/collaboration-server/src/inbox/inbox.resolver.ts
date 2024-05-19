import * as graphql from "@nestjs/graphql";
import { InboxResolverBase } from "./base/inbox.resolver.base";
import { Inbox } from "./base/Inbox";
import { InboxService } from "./inbox.service";

@graphql.Resolver(() => Inbox)
export class InboxResolver extends InboxResolverBase {
  constructor(protected readonly service: InboxService) {
    super(service);
  }
}
