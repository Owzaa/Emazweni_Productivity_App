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
import { TimeTracking } from "./TimeTracking";
import { TimeTrackingCountArgs } from "./TimeTrackingCountArgs";
import { TimeTrackingFindManyArgs } from "./TimeTrackingFindManyArgs";
import { TimeTrackingFindUniqueArgs } from "./TimeTrackingFindUniqueArgs";
import { DeleteTimeTrackingArgs } from "./DeleteTimeTrackingArgs";
import { TimeTrackingService } from "../timeTracking.service";
@graphql.Resolver(() => TimeTracking)
export class TimeTrackingResolverBase {
  constructor(protected readonly service: TimeTrackingService) {}

  async _timeTrackingsMeta(
    @graphql.Args() args: TimeTrackingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TimeTracking])
  async timeTrackings(
    @graphql.Args() args: TimeTrackingFindManyArgs
  ): Promise<TimeTracking[]> {
    return this.service.timeTrackings(args);
  }

  @graphql.Query(() => TimeTracking, { nullable: true })
  async timeTracking(
    @graphql.Args() args: TimeTrackingFindUniqueArgs
  ): Promise<TimeTracking | null> {
    const result = await this.service.timeTracking(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TimeTracking)
  async deleteTimeTracking(
    @graphql.Args() args: DeleteTimeTrackingArgs
  ): Promise<TimeTracking | null> {
    try {
      return await this.service.deleteTimeTracking(args);
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