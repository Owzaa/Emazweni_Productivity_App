/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Kanban as PrismaKanban } from "@prisma/client";

export class KanbanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.KanbanCountArgs, "select">): Promise<number> {
    return this.prisma.kanban.count(args);
  }

  async kanbans<T extends Prisma.KanbanFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.KanbanFindManyArgs>
  ): Promise<PrismaKanban[]> {
    return this.prisma.kanban.findMany<Prisma.KanbanFindManyArgs>(args);
  }
  async kanban<T extends Prisma.KanbanFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.KanbanFindUniqueArgs>
  ): Promise<PrismaKanban | null> {
    return this.prisma.kanban.findUnique(args);
  }
  async createKanban<T extends Prisma.KanbanCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.KanbanCreateArgs>
  ): Promise<PrismaKanban> {
    return this.prisma.kanban.create<T>(args);
  }
  async updateKanban<T extends Prisma.KanbanUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.KanbanUpdateArgs>
  ): Promise<PrismaKanban> {
    return this.prisma.kanban.update<T>(args);
  }
  async deleteKanban<T extends Prisma.KanbanDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.KanbanDeleteArgs>
  ): Promise<PrismaKanban> {
    return this.prisma.kanban.delete(args);
  }
}
