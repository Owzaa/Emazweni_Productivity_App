import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomFieldsServiceBase } from "./base/customFields.service.base";

@Injectable()
export class CustomFieldsService extends CustomFieldsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
