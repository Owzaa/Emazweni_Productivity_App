import * as graphql from "@nestjs/graphql";
import { CustomFieldsResolverBase } from "./base/customFields.resolver.base";
import { CustomFields } from "./base/CustomFields";
import { CustomFieldsService } from "./customFields.service";

@graphql.Resolver(() => CustomFields)
export class CustomFieldsResolver extends CustomFieldsResolverBase {
  constructor(protected readonly service: CustomFieldsService) {
    super(service);
  }
}
