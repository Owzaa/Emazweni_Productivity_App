import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhiteboardsServiceBase } from "./base/whiteboards.service.base";

@Injectable()
export class WhiteboardsService extends WhiteboardsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
