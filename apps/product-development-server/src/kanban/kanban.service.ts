import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KanbanServiceBase } from "./base/kanban.service.base";

@Injectable()
export class KanbanService extends KanbanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
