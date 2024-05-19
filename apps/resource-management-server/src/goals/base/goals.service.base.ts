/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Goals as PrismaGoals } from "@prisma/client";

export class GoalsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GoalsCountArgs, "select">): Promise<number> {
    return this.prisma.goals.count(args);
  }

  async goalsItems<T extends Prisma.GoalsFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalsFindManyArgs>
  ): Promise<PrismaGoals[]> {
    return this.prisma.goals.findMany<Prisma.GoalsFindManyArgs>(args);
  }
  async goals<T extends Prisma.GoalsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalsFindUniqueArgs>
  ): Promise<PrismaGoals | null> {
    return this.prisma.goals.findUnique(args);
  }
  async createGoals<T extends Prisma.GoalsCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalsCreateArgs>
  ): Promise<PrismaGoals> {
    return this.prisma.goals.create<T>(args);
  }
  async updateGoals<T extends Prisma.GoalsUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalsUpdateArgs>
  ): Promise<PrismaGoals> {
    return this.prisma.goals.update<T>(args);
  }
  async deleteGoals<T extends Prisma.GoalsDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalsDeleteArgs>
  ): Promise<PrismaGoals> {
    return this.prisma.goals.delete(args);
  }
}
