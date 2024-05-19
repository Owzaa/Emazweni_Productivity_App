import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AskAiServiceBase } from "./base/askAi.service.base";

@Injectable()
export class AskAiService extends AskAiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
