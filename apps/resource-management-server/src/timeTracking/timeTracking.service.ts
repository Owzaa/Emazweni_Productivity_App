import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeTrackingServiceBase } from "./base/timeTracking.service.base";

@Injectable()
export class TimeTrackingService extends TimeTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
