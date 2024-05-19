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
import { RoadmapBacklogService } from "../roadmapBacklog.service";
import { RoadmapBacklogCreateInput } from "./RoadmapBacklogCreateInput";
import { RoadmapBacklog } from "./RoadmapBacklog";
import { RoadmapBacklogFindManyArgs } from "./RoadmapBacklogFindManyArgs";
import { RoadmapBacklogWhereUniqueInput } from "./RoadmapBacklogWhereUniqueInput";
import { RoadmapBacklogUpdateInput } from "./RoadmapBacklogUpdateInput";

export class RoadmapBacklogControllerBase {
  constructor(protected readonly service: RoadmapBacklogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RoadmapBacklog })
  async createRoadmapBacklog(
    @common.Body() data: RoadmapBacklogCreateInput
  ): Promise<RoadmapBacklog> {
    return await this.service.createRoadmapBacklog({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RoadmapBacklog] })
  @ApiNestedQuery(RoadmapBacklogFindManyArgs)
  async roadmapBacklogs(
    @common.Req() request: Request
  ): Promise<RoadmapBacklog[]> {
    const args = plainToClass(RoadmapBacklogFindManyArgs, request.query);
    return this.service.roadmapBacklogs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RoadmapBacklog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async roadmapBacklog(
    @common.Param() params: RoadmapBacklogWhereUniqueInput
  ): Promise<RoadmapBacklog | null> {
    const result = await this.service.roadmapBacklog({
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
  @swagger.ApiOkResponse({ type: RoadmapBacklog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRoadmapBacklog(
    @common.Param() params: RoadmapBacklogWhereUniqueInput,
    @common.Body() data: RoadmapBacklogUpdateInput
  ): Promise<RoadmapBacklog | null> {
    try {
      return await this.service.updateRoadmapBacklog({
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
  @swagger.ApiOkResponse({ type: RoadmapBacklog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRoadmapBacklog(
    @common.Param() params: RoadmapBacklogWhereUniqueInput
  ): Promise<RoadmapBacklog | null> {
    try {
      return await this.service.deleteRoadmapBacklog({
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