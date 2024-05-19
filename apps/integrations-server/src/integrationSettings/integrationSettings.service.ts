import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationSettingsServiceBase } from "./base/integrationSettings.service.base";

@Injectable()
export class IntegrationSettingsService extends IntegrationSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
