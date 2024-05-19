import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocsServiceBase } from "./base/docs.service.base";

@Injectable()
export class DocsService extends DocsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
