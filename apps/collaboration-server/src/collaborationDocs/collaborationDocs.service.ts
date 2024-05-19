import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollaborationDocsServiceBase } from "./base/collaborationDocs.service.base";

@Injectable()
export class CollaborationDocsService extends CollaborationDocsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
