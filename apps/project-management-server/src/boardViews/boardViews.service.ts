import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoardViewsServiceBase } from "./base/boardViews.service.base";

@Injectable()
export class BoardViewsService extends BoardViewsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
