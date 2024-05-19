import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WikisServiceBase } from "./base/wikis.service.base";

@Injectable()
export class WikisService extends WikisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
