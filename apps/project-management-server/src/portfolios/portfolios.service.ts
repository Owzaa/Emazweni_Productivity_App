import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PortfoliosServiceBase } from "./base/portfolios.service.base";

@Injectable()
export class PortfoliosService extends PortfoliosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
