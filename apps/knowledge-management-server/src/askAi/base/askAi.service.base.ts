/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AskAi as PrismaAskAi } from "@prisma/client";

export class AskAiServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AskAiCountArgs, "select">): Promise<number> {
    return this.prisma.askAi.count(args);
  }

  async askAis<T extends Prisma.AskAiFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AskAiFindManyArgs>
  ): Promise<PrismaAskAi[]> {
    return this.prisma.askAi.findMany<Prisma.AskAiFindManyArgs>(args);
  }
  async askAi<T extends Prisma.AskAiFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AskAiFindUniqueArgs>
  ): Promise<PrismaAskAi | null> {
    return this.prisma.askAi.findUnique(args);
  }
  async createAskAi<T extends Prisma.AskAiCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AskAiCreateArgs>
  ): Promise<PrismaAskAi> {
    return this.prisma.askAi.create<T>(args);
  }
  async updateAskAi<T extends Prisma.AskAiUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AskAiUpdateArgs>
  ): Promise<PrismaAskAi> {
    return this.prisma.askAi.update<T>(args);
  }
  async deleteAskAi<T extends Prisma.AskAiDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AskAiDeleteArgs>
  ): Promise<PrismaAskAi> {
    return this.prisma.askAi.delete(args);
  }
}
