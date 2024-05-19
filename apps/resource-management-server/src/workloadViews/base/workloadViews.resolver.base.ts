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
import { WorkloadViews } from "./WorkloadViews";
import { WorkloadViewsCountArgs } from "./WorkloadViewsCountArgs";
import { WorkloadViewsFindManyArgs } from "./WorkloadViewsFindManyArgs";
import { WorkloadViewsFindUniqueArgs } from "./WorkloadViewsFindUniqueArgs";
import { DeleteWorkloadViewsArgs } from "./DeleteWorkloadViewsArgs";
import { WorkloadViewsService } from "../workloadViews.service";
@graphql.Resolver(() => WorkloadViews)
export class WorkloadViewsResolverBase {
  constructor(protected readonly service: WorkloadViewsService) {}

  async _workloadViewsItemsMeta(
    @graphql.Args() args: WorkloadViewsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WorkloadViews])
  async workloadViewsItems(
    @graphql.Args() args: WorkloadViewsFindManyArgs
  ): Promise<WorkloadViews[]> {
    return this.service.workloadViewsItems(args);
  }

  @graphql.Query(() => WorkloadViews, { nullable: true })
  async workloadViews(
    @graphql.Args() args: WorkloadViewsFindUniqueArgs
  ): Promise<WorkloadViews | null> {
    const result = await this.service.workloadViews(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WorkloadViews)
  async deleteWorkloadViews(
    @graphql.Args() args: DeleteWorkloadViewsArgs
  ): Promise<WorkloadViews | null> {
    try {
      return await this.service.deleteWorkloadViews(args);
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