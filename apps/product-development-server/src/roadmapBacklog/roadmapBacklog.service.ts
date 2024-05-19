import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoadmapBacklogServiceBase } from "./base/roadmapBacklog.service.base";

@Injectable()
export class RoadmapBacklogService extends RoadmapBacklogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
