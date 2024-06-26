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
import { FormsService } from "../forms.service";
import { FormsCreateInput } from "./FormsCreateInput";
import { Forms } from "./Forms";
import { FormsFindManyArgs } from "./FormsFindManyArgs";
import { FormsWhereUniqueInput } from "./FormsWhereUniqueInput";
import { FormsUpdateInput } from "./FormsUpdateInput";

export class FormsControllerBase {
  constructor(protected readonly service: FormsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Forms })
  async createForms(@common.Body() data: FormsCreateInput): Promise<Forms> {
    return await this.service.createForms({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Forms] })
  @ApiNestedQuery(FormsFindManyArgs)
  async formsItems(@common.Req() request: Request): Promise<Forms[]> {
    const args = plainToClass(FormsFindManyArgs, request.query);
    return this.service.formsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Forms })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async forms(
    @common.Param() params: FormsWhereUniqueInput
  ): Promise<Forms | null> {
    const result = await this.service.forms({
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
  @swagger.ApiOkResponse({ type: Forms })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateForms(
    @common.Param() params: FormsWhereUniqueInput,
    @common.Body() data: FormsUpdateInput
  ): Promise<Forms | null> {
    try {
      return await this.service.updateForms({
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
  @swagger.ApiOkResponse({ type: Forms })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteForms(
    @common.Param() params: FormsWhereUniqueInput
  ): Promise<Forms | null> {
    try {
      return await this.service.deleteForms({
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
