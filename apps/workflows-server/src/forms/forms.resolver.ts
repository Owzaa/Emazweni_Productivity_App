import * as graphql from "@nestjs/graphql";
import { FormsResolverBase } from "./base/forms.resolver.base";
import { Forms } from "./base/Forms";
import { FormsService } from "./forms.service";

@graphql.Resolver(() => Forms)
export class FormsResolver extends FormsResolverBase {
  constructor(protected readonly service: FormsService) {
    super(service);
  }
}
