import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalsServiceBase } from "./base/goals.service.base";

@Injectable()
export class GoalsService extends GoalsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
