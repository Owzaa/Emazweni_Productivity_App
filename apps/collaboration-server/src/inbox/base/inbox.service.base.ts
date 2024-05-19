/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Inbox as PrismaInbox } from "@prisma/client";

export class InboxServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.InboxCountArgs, "select">): Promise<number> {
    return this.prisma.inbox.count(args);
  }

  async inboxes<T extends Prisma.InboxFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxFindManyArgs>
  ): Promise<PrismaInbox[]> {
    return this.prisma.inbox.findMany<Prisma.InboxFindManyArgs>(args);
  }
  async inbox<T extends Prisma.InboxFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxFindUniqueArgs>
  ): Promise<PrismaInbox | null> {
    return this.prisma.inbox.findUnique(args);
  }
  async createInbox<T extends Prisma.InboxCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxCreateArgs>
  ): Promise<PrismaInbox> {
    return this.prisma.inbox.create<T>(args);
  }
  async updateInbox<T extends Prisma.InboxUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxUpdateArgs>
  ): Promise<PrismaInbox> {
    return this.prisma.inbox.update<T>(args);
  }
  async deleteInbox<T extends Prisma.InboxDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxDeleteArgs>
  ): Promise<PrismaInbox> {
    return this.prisma.inbox.delete(args);
  }
}