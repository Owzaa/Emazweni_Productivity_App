import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomationsServiceBase } from "./base/automations.service.base";

@Injectable()
export class AutomationsService extends AutomationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
