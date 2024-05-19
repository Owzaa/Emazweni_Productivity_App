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
import { Portfolios } from "./Portfolios";
import { PortfoliosCountArgs } from "./PortfoliosCountArgs";
import { PortfoliosFindManyArgs } from "./PortfoliosFindManyArgs";
import { PortfoliosFindUniqueArgs } from "./PortfoliosFindUniqueArgs";
import { DeletePortfoliosArgs } from "./DeletePortfoliosArgs";
import { PortfoliosService } from "../portfolios.service";
@graphql.Resolver(() => Portfolios)
export class PortfoliosResolverBase {
  constructor(protected readonly service: PortfoliosService) {}

  async _portfoliosItemsMeta(
    @graphql.Args() args: PortfoliosCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Portfolios])
  async portfoliosItems(
    @graphql.Args() args: PortfoliosFindManyArgs
  ): Promise<Portfolios[]> {
    return this.service.portfoliosItems(args);
  }

  @graphql.Query(() => Portfolios, { nullable: true })
  async portfolios(
    @graphql.Args() args: PortfoliosFindUniqueArgs
  ): Promise<Portfolios | null> {
    const result = await this.service.portfolios(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Portfolios)
  async deletePortfolios(
    @graphql.Args() args: DeletePortfoliosArgs
  ): Promise<Portfolios | null> {
    try {
      return await this.service.deletePortfolios(args);
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
