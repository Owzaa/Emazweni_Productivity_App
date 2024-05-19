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
import { CustomStatusesService } from "../customStatuses.service";
import { CustomStatusesCreateInput } from "./CustomStatusesCreateInput";
import { CustomStatuses } from "./CustomStatuses";
import { CustomStatusesFindManyArgs } from "./CustomStatusesFindManyArgs";
import { CustomStatusesWhereUniqueInput } from "./CustomStatusesWhereUniqueInput";
import { CustomStatusesUpdateInput } from "./CustomStatusesUpdateInput";

export class CustomStatusesControllerBase {
  constructor(protected readonly service: CustomStatusesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomStatuses })
  async createCustomStatuses(
    @common.Body() data: CustomStatusesCreateInput
  ): Promise<CustomStatuses> {
    return await this.service.createCustomStatuses({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomStatuses] })
  @ApiNestedQuery(CustomStatusesFindManyArgs)
  async customStatusesItems(
    @common.Req() request: Request
  ): Promise<CustomStatuses[]> {
    const args = plainToClass(CustomStatusesFindManyArgs, request.query);
    return this.service.customStatusesItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomStatuses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customStatuses(
    @common.Param() params: CustomStatusesWhereUniqueInput
  ): Promise<CustomStatuses | null> {
    const result = await this.service.customStatuses({
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
  @swagger.ApiOkResponse({ type: CustomStatuses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomStatuses(
    @common.Param() params: CustomStatusesWhereUniqueInput,
    @common.Body() data: CustomStatusesUpdateInput
  ): Promise<CustomStatuses | null> {
    try {
      return await this.service.updateCustomStatuses({
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
  @swagger.ApiOkResponse({ type: CustomStatuses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomStatuses(
    @common.Param() params: CustomStatusesWhereUniqueInput
  ): Promise<CustomStatuses | null> {
    try {
      return await this.service.deleteCustomStatuses({
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