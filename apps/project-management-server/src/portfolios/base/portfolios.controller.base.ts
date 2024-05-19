/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PortfoliosService } from "../portfolios.service";
import { PortfoliosCreateInput } from "./PortfoliosCreateInput";
import { Portfolios } from "./Portfolios";
import { PortfoliosFindManyArgs } from "./PortfoliosFindManyArgs";
import { PortfoliosWhereUniqueInput } from "./PortfoliosWhereUniqueInput";
import { PortfoliosUpdateInput } from "./PortfoliosUpdateInput";

export class PortfoliosControllerBase {
  constructor(protected readonly service: PortfoliosService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Portfolios })
  async createPortfolios(
    @common.Body() data: PortfoliosCreateInput
  ): Promise<Portfolios> {
    return await this.service.createPortfolios({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Portfolios] })
  @ApiNestedQuery(PortfoliosFindManyArgs)
  async portfoliosItems(@common.Req() request: Request): Promise<Portfolios[]> {
    const args = plainToClass(PortfoliosFindManyArgs, request.query);
    return this.service.portfoliosItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Portfolios })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async portfolios(
    @common.Param() params: PortfoliosWhereUniqueInput
  ): Promise<Portfolios | null> {
    const result = await this.service.portfolios({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Portfolios })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePortfolios(
    @common.Param() params: PortfoliosWhereUniqueInput,
    @common.Body() data: PortfoliosUpdateInput
  ): Promise<Portfolios | null> {
    try {
      return await this.service.updatePortfolios({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Portfolios })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePortfolios(
    @common.Param() params: PortfoliosWhereUniqueInput
  ): Promise<Portfolios | null> {
    try {
      return await this.service.deletePortfolios({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
