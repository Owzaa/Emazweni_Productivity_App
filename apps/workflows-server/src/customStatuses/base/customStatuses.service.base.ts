/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CustomStatuses as PrismaCustomStatuses } from "@prisma/client";

export class CustomStatusesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CustomStatusesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customStatuses.count(args);
  }

  async customStatusesItems<T extends Prisma.CustomStatusesFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomStatusesFindManyArgs>
  ): Promise<PrismaCustomStatuses[]> {
    return this.prisma.customStatuses.findMany<Prisma.CustomStatusesFindManyArgs>(
      args
    );
  }
  async customStatuses<T extends Prisma.CustomStatusesFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomStatusesFindUniqueArgs>
  ): Promise<PrismaCustomStatuses | null> {
    return this.prisma.customStatuses.findUnique(args);
  }
  async createCustomStatuses<T extends Prisma.CustomStatusesCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomStatusesCreateArgs>
  ): Promise<PrismaCustomStatuses> {
    return this.prisma.customStatuses.create<T>(args);
  }
  async updateCustomStatuses<T extends Prisma.CustomStatusesUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomStatusesUpdateArgs>
  ): Promise<PrismaCustomStatuses> {
    return this.prisma.customStatuses.update<T>(args);
  }
  async deleteCustomStatuses<T extends Prisma.CustomStatusesDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomStatusesDeleteArgs>
  ): Promise<PrismaCustomStatuses> {
    return this.prisma.customStatuses.delete(args);
  }
}
