/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, WorkloadViews as PrismaWorkloadViews } from "@prisma/client";

export class WorkloadViewsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkloadViewsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workloadViews.count(args);
  }

  async workloadViewsItems<T extends Prisma.WorkloadViewsFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkloadViewsFindManyArgs>
  ): Promise<PrismaWorkloadViews[]> {
    return this.prisma.workloadViews.findMany<Prisma.WorkloadViewsFindManyArgs>(
      args
    );
  }
  async workloadViews<T extends Prisma.WorkloadViewsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkloadViewsFindUniqueArgs>
  ): Promise<PrismaWorkloadViews | null> {
    return this.prisma.workloadViews.findUnique(args);
  }
  async createWorkloadViews<T extends Prisma.WorkloadViewsCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkloadViewsCreateArgs>
  ): Promise<PrismaWorkloadViews> {
    return this.prisma.workloadViews.create<T>(args);
  }
  async updateWorkloadViews<T extends Prisma.WorkloadViewsUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkloadViewsUpdateArgs>
  ): Promise<PrismaWorkloadViews> {
    return this.prisma.workloadViews.update<T>(args);
  }
  async deleteWorkloadViews<T extends Prisma.WorkloadViewsDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkloadViewsDeleteArgs>
  ): Promise<PrismaWorkloadViews> {
    return this.prisma.workloadViews.delete(args);
  }
}