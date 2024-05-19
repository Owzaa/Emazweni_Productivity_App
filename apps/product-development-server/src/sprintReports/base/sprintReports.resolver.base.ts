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
import { SprintReports } from "./SprintReports";
import { SprintReportsCountArgs } from "./SprintReportsCountArgs";
import { SprintReportsFindManyArgs } from "./SprintReportsFindManyArgs";
import { SprintReportsFindUniqueArgs } from "./SprintReportsFindUniqueArgs";
import { DeleteSprintReportsArgs } from "./DeleteSprintReportsArgs";
import { SprintReportsService } from "../sprintReports.service";
@graphql.Resolver(() => SprintReports)
export class SprintReportsResolverBase {
  constructor(protected readonly service: SprintReportsService) {}

  async _sprintReportsItemsMeta(
    @graphql.Args() args: SprintReportsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SprintReports])
  async sprintReportsItems(
    @graphql.Args() args: SprintReportsFindManyArgs
  ): Promise<SprintReports[]> {
    return this.service.sprintReportsItems(args);
  }

  @graphql.Query(() => SprintReports, { nullable: true })
  async sprintReports(
    @graphql.Args() args: SprintReportsFindUniqueArgs
  ): Promise<SprintReports | null> {
    const result = await this.service.sprintReports(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SprintReports)
  async deleteSprintReports(
    @graphql.Args() args: DeleteSprintReportsArgs
  ): Promise<SprintReports | null> {
    try {
      return await this.service.deleteSprintReports(args);
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
