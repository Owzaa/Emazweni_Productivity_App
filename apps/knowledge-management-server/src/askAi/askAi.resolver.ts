import * as graphql from "@nestjs/graphql";
import { AskAiResolverBase } from "./base/askAi.resolver.base";
import { AskAi } from "./base/AskAi";
import { AskAiService } from "./askAi.service";

@graphql.Resolver(() => AskAi)
export class AskAiResolver extends AskAiResolverBase {
  constructor(protected readonly service: AskAiService) {
    super(service);
  }
}
