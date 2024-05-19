/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CustomFields as PrismaCustomFields } from "@prisma/client";

export class CustomFieldsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CustomFieldsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customFields.count(args);
  }

  async customFieldsItems<T extends Prisma.CustomFieldsFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomFieldsFindManyArgs>
  ): Promise<PrismaCustomFields[]> {
    return this.prisma.customFields.findMany<Prisma.CustomFieldsFindManyArgs>(
      args
    );
  }
  async customFields<T extends Prisma.CustomFieldsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomFieldsFindUniqueArgs>
  ): Promise<PrismaCustomFields | null> {
    return this.prisma.customFields.findUnique(args);
  }
  async createCustomFields<T extends Prisma.CustomFieldsCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomFieldsCreateArgs>
  ): Promise<PrismaCustomFields> {
    return this.prisma.customFields.create<T>(args);
  }
  async updateCustomFields<T extends Prisma.CustomFieldsUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomFieldsUpdateArgs>
  ): Promise<PrismaCustomFields> {
    return this.prisma.customFields.update<T>(args);
  }
  async deleteCustomFields<T extends Prisma.CustomFieldsDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomFieldsDeleteArgs>
  ): Promise<PrismaCustomFields> {
    return this.prisma.customFields.delete(args);
  }
}