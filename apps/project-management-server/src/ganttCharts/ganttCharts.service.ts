import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GanttChartsServiceBase } from "./base/ganttCharts.service.base";

@Injectable()
export class GanttChartsService extends GanttChartsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
