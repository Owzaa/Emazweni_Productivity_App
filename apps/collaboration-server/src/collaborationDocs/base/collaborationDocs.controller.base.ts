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
import { CollaborationDocsService } from "../collaborationDocs.service";
import { CollaborationDocsCreateInput } from "./CollaborationDocsCreateInput";
import { CollaborationDocs } from "./CollaborationDocs";
import { CollaborationDocsFindManyArgs } from "./CollaborationDocsFindManyArgs";
import { CollaborationDocsWhereUniqueInput } from "./CollaborationDocsWhereUniqueInput";
import { CollaborationDocsUpdateInput } from "./CollaborationDocsUpdateInput";

export class CollaborationDocsControllerBase {
  constructor(protected readonly service: CollaborationDocsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CollaborationDocs })
  async createCollaborationDocs(
    @common.Body() data: CollaborationDocsCreateInput
  ): Promise<CollaborationDocs> {
    return await this.service.createCollaborationDocs({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CollaborationDocs] })
  @ApiNestedQuery(CollaborationDocsFindManyArgs)
  async collaborationDocsItems(
    @common.Req() request: Request
  ): Promise<CollaborationDocs[]> {
    const args = plainToClass(CollaborationDocsFindManyArgs, request.query);
    return this.service.collaborationDocsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CollaborationDocs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async collaborationDocs(
    @common.Param() params: CollaborationDocsWhereUniqueInput
  ): Promise<CollaborationDocs | null> {
    const result = await this.service.collaborationDocs({
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
  @swagger.ApiOkResponse({ type: CollaborationDocs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCollaborationDocs(
    @common.Param() params: CollaborationDocsWhereUniqueInput,
    @common.Body() data: CollaborationDocsUpdateInput
  ): Promise<CollaborationDocs | null> {
    try {
      return await this.service.updateCollaborationDocs({
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
  @swagger.ApiOkResponse({ type: CollaborationDocs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCollaborationDocs(
    @common.Param() params: CollaborationDocsWhereUniqueInput
  ): Promise<CollaborationDocs | null> {
    try {
      return await this.service.deleteCollaborationDocs({
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
