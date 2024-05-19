import * as graphql from "@nestjs/graphql";
import { SprintReportsResolverBase } from "./base/sprintReports.resolver.base";
import { SprintReports } from "./base/SprintReports";
import { SprintReportsService } from "./sprintReports.service";

@graphql.Resolver(() => SprintReports)
export class SprintReportsResolver extends SprintReportsResolverBase {
  constructor(protected readonly service: SprintReportsService) {
    super(service);
  }
}
