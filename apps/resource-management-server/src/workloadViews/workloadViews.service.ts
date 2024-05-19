import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkloadViewsServiceBase } from "./base/workloadViews.service.base";

@Injectable()
export class WorkloadViewsService extends WorkloadViewsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
