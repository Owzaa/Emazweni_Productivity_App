import * as graphql from "@nestjs/graphql";
import { WhiteboardsResolverBase } from "./base/whiteboards.resolver.base";
import { Whiteboards } from "./base/Whiteboards";
import { WhiteboardsService } from "./whiteboards.service";

@graphql.Resolver(() => Whiteboards)
export class WhiteboardsResolver extends WhiteboardsResolverBase {
  constructor(protected readonly service: WhiteboardsService) {
    super(service);
  }
}
