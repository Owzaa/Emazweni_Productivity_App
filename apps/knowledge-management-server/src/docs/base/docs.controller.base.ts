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
import { DocsService } from "../docs.service";
import { DocsCreateInput } from "./DocsCreateInput";
import { Docs } from "./Docs";
import { DocsFindManyArgs } from "./DocsFindManyArgs";
import { DocsWhereUniqueInput } from "./DocsWhereUniqueInput";
import { DocsUpdateInput } from "./DocsUpdateInput";

export class DocsControllerBase {
  constructor(protected readonly service: DocsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Docs })
  async createDocs(@common.Body() data: DocsCreateInput): Promise<Docs> {
    return await this.service.createDocs({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Docs] })
  @ApiNestedQuery(DocsFindManyArgs)
  async docsItems(@common.Req() request: Request): Promise<Docs[]> {
    const args = plainToClass(DocsFindManyArgs, request.query);
    return this.service.docsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Docs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async docs(
    @common.Param() params: DocsWhereUniqueInput
  ): Promise<Docs | null> {
    const result = await this.service.docs({
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
  @swagger.ApiOkResponse({ type: Docs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocs(
    @common.Param() params: DocsWhereUniqueInput,
    @common.Body() data: DocsUpdateInput
  ): Promise<Docs | null> {
    try {
      return await this.service.updateDocs({
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
  @swagger.ApiOkResponse({ type: Docs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocs(
    @common.Param() params: DocsWhereUniqueInput
  ): Promise<Docs | null> {
    try {
      return await this.service.deleteDocs({
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
