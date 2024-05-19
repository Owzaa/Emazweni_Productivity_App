import * as graphql from "@nestjs/graphql";
import { KanbanResolverBase } from "./base/kanban.resolver.base";
import { Kanban } from "./base/Kanban";
import { KanbanService } from "./kanban.service";

@graphql.Resolver(() => Kanban)
export class KanbanResolver extends KanbanResolverBase {
  constructor(protected readonly service: KanbanService) {
    super(service);
  }
}
