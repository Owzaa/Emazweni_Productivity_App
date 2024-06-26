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
import { BoardViews } from "./BoardViews";
import { BoardViewsCountArgs } from "./BoardViewsCountArgs";
import { BoardViewsFindManyArgs } from "./BoardViewsFindManyArgs";
import { BoardViewsFindUniqueArgs } from "./BoardViewsFindUniqueArgs";
import { DeleteBoardViewsArgs } from "./DeleteBoardViewsArgs";
import { BoardViewsService } from "../boardViews.service";
@graphql.Resolver(() => BoardViews)
export class BoardViewsResolverBase {
  constructor(protected readonly service: BoardViewsService) {}

  async _boardViewsItemsMeta(
    @graphql.Args() args: BoardViewsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BoardViews])
  async boardViewsItems(
    @graphql.Args() args: BoardViewsFindManyArgs
  ): Promise<BoardViews[]> {
    return this.service.boardViewsItems(args);
  }

  @graphql.Query(() => BoardViews, { nullable: true })
  async boardViews(
    @graphql.Args() args: BoardViewsFindUniqueArgs
  ): Promise<BoardViews | null> {
    const result = await this.service.boardViews(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BoardViews)
  async deleteBoardViews(
    @graphql.Args() args: DeleteBoardViewsArgs
  ): Promise<BoardViews | null> {
    try {
      return await this.service.deleteBoardViews(args);
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
