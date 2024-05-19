import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UniversalSearchServiceBase } from "./base/universalSearch.service.base";

@Injectable()
export class UniversalSearchService extends UniversalSearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
