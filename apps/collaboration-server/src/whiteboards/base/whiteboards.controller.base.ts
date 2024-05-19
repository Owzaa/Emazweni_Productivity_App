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
import { WhiteboardsService } from "../whiteboards.service";
import { WhiteboardsCreateInput } from "./WhiteboardsCreateInput";
import { Whiteboards } from "./Whiteboards";
import { WhiteboardsFindManyArgs } from "./WhiteboardsFindManyArgs";
import { WhiteboardsWhereUniqueInput } from "./WhiteboardsWhereUniqueInput";
import { WhiteboardsUpdateInput } from "./WhiteboardsUpdateInput";

export class WhiteboardsControllerBase {
  constructor(protected readonly service: WhiteboardsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Whiteboards })
  async createWhiteboards(
    @common.Body() data: WhiteboardsCreateInput
  ): Promise<Whiteboards> {
    return await this.service.createWhiteboards({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Whiteboards] })
  @ApiNestedQuery(WhiteboardsFindManyArgs)
  async whiteboardsItems(
    @common.Req() request: Request
  ): Promise<Whiteboards[]> {
    const args = plainToClass(WhiteboardsFindManyArgs, request.query);
    return this.service.whiteboardsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Whiteboards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async whiteboards(
    @common.Param() params: WhiteboardsWhereUniqueInput
  ): Promise<Whiteboards | null> {
    const result = await this.service.whiteboards({
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
  @swagger.ApiOkResponse({ type: Whiteboards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWhiteboards(
    @common.Param() params: WhiteboardsWhereUniqueInput,
    @common.Body() data: WhiteboardsUpdateInput
  ): Promise<Whiteboards | null> {
    try {
      return await this.service.updateWhiteboards({
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
  @swagger.ApiOkResponse({ type: Whiteboards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWhiteboards(
    @common.Param() params: WhiteboardsWhereUniqueInput
  ): Promise<Whiteboards | null> {
    try {
      return await this.service.deleteWhiteboards({
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
