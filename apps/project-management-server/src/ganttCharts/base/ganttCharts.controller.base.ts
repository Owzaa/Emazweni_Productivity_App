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
import { GanttChartsService } from "../ganttCharts.service";
import { GanttChartsCreateInput } from "./GanttChartsCreateInput";
import { GanttCharts } from "./GanttCharts";
import { GanttChartsFindManyArgs } from "./GanttChartsFindManyArgs";
import { GanttChartsWhereUniqueInput } from "./GanttChartsWhereUniqueInput";
import { GanttChartsUpdateInput } from "./GanttChartsUpdateInput";

export class GanttChartsControllerBase {
  constructor(protected readonly service: GanttChartsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GanttCharts })
  async createGanttCharts(
    @common.Body() data: GanttChartsCreateInput
  ): Promise<GanttCharts> {
    return await this.service.createGanttCharts({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GanttCharts] })
  @ApiNestedQuery(GanttChartsFindManyArgs)
  async ganttChartsItems(
    @common.Req() request: Request
  ): Promise<GanttCharts[]> {
    const args = plainToClass(GanttChartsFindManyArgs, request.query);
    return this.service.ganttChartsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GanttCharts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ganttCharts(
    @common.Param() params: GanttChartsWhereUniqueInput
  ): Promise<GanttCharts | null> {
    const result = await this.service.ganttCharts({
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
  @swagger.ApiOkResponse({ type: GanttCharts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGanttCharts(
    @common.Param() params: GanttChartsWhereUniqueInput,
    @common.Body() data: GanttChartsUpdateInput
  ): Promise<GanttCharts | null> {
    try {
      return await this.service.updateGanttCharts({
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
  @swagger.ApiOkResponse({ type: GanttCharts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGanttCharts(
    @common.Param() params: GanttChartsWhereUniqueInput
  ): Promise<GanttCharts | null> {
    try {
      return await this.service.deleteGanttCharts({
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
