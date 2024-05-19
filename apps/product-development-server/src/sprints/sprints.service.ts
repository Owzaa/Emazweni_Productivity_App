import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SprintsServiceBase } from "./base/sprints.service.base";

@Injectable()
export class SprintsService extends SprintsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
