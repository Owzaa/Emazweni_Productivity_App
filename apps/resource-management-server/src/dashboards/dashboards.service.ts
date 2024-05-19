import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardsServiceBase } from "./base/dashboards.service.base";

@Injectable()
export class DashboardsService extends DashboardsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
