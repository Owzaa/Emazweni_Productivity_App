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
import { WorkloadViewsService } from "../workloadViews.service";
import { WorkloadViewsCreateInput } from "./WorkloadViewsCreateInput";
import { WorkloadViews } from "./WorkloadViews";
import { WorkloadViewsFindManyArgs } from "./WorkloadViewsFindManyArgs";
import { WorkloadViewsWhereUniqueInput } from "./WorkloadViewsWhereUniqueInput";
import { WorkloadViewsUpdateInput } from "./WorkloadViewsUpdateInput";

export class WorkloadViewsControllerBase {
  constructor(protected readonly service: WorkloadViewsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkloadViews })
  async createWorkloadViews(
    @common.Body() data: WorkloadViewsCreateInput
  ): Promise<WorkloadViews> {
    return await this.service.createWorkloadViews({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WorkloadViews] })
  @ApiNestedQuery(WorkloadViewsFindManyArgs)
  async workloadViewsItems(
    @common.Req() request: Request
  ): Promise<WorkloadViews[]> {
    const args = plainToClass(WorkloadViewsFindManyArgs, request.query);
    return this.service.workloadViewsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WorkloadViews })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async workloadViews(
    @common.Param() params: WorkloadViewsWhereUniqueInput
  ): Promise<WorkloadViews | null> {
    const result = await this.service.workloadViews({
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
  @swagger.ApiOkResponse({ type: WorkloadViews })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWorkloadViews(
    @common.Param() params: WorkloadViewsWhereUniqueInput,
    @common.Body() data: WorkloadViewsUpdateInput
  ): Promise<WorkloadViews | null> {
    try {
      return await this.service.updateWorkloadViews({
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
  @swagger.ApiOkResponse({ type: WorkloadViews })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWorkloadViews(
    @common.Param() params: WorkloadViewsWhereUniqueInput
  ): Promise<WorkloadViews | null> {
    try {
      return await this.service.deleteWorkloadViews({
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