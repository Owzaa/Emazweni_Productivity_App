/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Kanban } from "./Kanban";
import { KanbanCountArgs } from "./KanbanCountArgs";
import { KanbanFindManyArgs } from "./KanbanFindManyArgs";
import { KanbanFindUniqueArgs } from "./KanbanFindUniqueArgs";
import { DeleteKanbanArgs } from "./DeleteKanbanArgs";
import { KanbanService } from "../kanban.service";
@graphql.Resolver(() => Kanban)
export class KanbanResolverBase {
  constructor(protected readonly service: KanbanService) {}

  async _kanbansMeta(
    @graphql.Args() args: KanbanCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Kanban])
  async kanbans(@graphql.Args() args: KanbanFindManyArgs): Promise<Kanban[]> {
    return this.service.kanbans(args);
  }

  @graphql.Query(() => Kanban, { nullable: true })
  async kanban(
    @graphql.Args() args: KanbanFindUniqueArgs
  ): Promise<Kanban | null> {
    const result = await this.service.kanban(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Kanban)
  async deleteKanban(
    @graphql.Args() args: DeleteKanbanArgs
  ): Promise<Kanban | null> {
    try {
      return await this.service.deleteKanban(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
