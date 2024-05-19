import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SprintReportsServiceBase } from "./base/sprintReports.service.base";

@Injectable()
export class SprintReportsService extends SprintReportsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
