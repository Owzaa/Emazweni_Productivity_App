import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomStatusesServiceBase } from "./base/customStatuses.service.base";

@Injectable()
export class CustomStatusesService extends CustomStatusesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
