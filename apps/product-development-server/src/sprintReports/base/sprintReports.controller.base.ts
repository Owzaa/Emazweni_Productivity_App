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
import { SprintReportsService } from "../sprintReports.service";
import { SprintReportsCreateInput } from "./SprintReportsCreateInput";
import { SprintReports } from "./SprintReports";
import { SprintReportsFindManyArgs } from "./SprintReportsFindManyArgs";
import { SprintReportsWhereUniqueInput } from "./SprintReportsWhereUniqueInput";
import { SprintReportsUpdateInput } from "./SprintReportsUpdateInput";

export class SprintReportsControllerBase {
  constructor(protected readonly service: SprintReportsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SprintReports })
  async createSprintReports(
    @common.Body() data: SprintReportsCreateInput
  ): Promise<SprintReports> {
    return await this.service.createSprintReports({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SprintReports] })
  @ApiNestedQuery(SprintReportsFindManyArgs)
  async sprintReportsItems(
    @common.Req() request: Request
  ): Promise<SprintReports[]> {
    const args = plainToClass(SprintReportsFindManyArgs, request.query);
    return this.service.sprintReportsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SprintReports })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async sprintReports(
    @common.Param() params: SprintReportsWhereUniqueInput
  ): Promise<SprintReports | null> {
    const result = await this.service.sprintReports({
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
  @swagger.ApiOkResponse({ type: SprintReports })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSprintReports(
    @common.Param() params: SprintReportsWhereUniqueInput,
    @common.Body() data: SprintReportsUpdateInput
  ): Promise<SprintReports | null> {
    try {
      return await this.service.updateSprintReports({
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
  @swagger.ApiOkResponse({ type: SprintReports })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSprintReports(
    @common.Param() params: SprintReportsWhereUniqueInput
  ): Promise<SprintReports | null> {
    try {
      return await this.service.deleteSprintReports({
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
