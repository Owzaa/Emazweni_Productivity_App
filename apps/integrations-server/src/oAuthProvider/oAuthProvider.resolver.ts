import * as graphql from "@nestjs/graphql";
import { OAuthProviderResolverBase } from "./base/oAuthProvider.resolver.base";
import { OAuthProvider } from "./base/OAuthProvider";
import { OAuthProviderService } from "./oAuthProvider.service";

@graphql.Resolver(() => OAuthProvider)
export class OAuthProviderResolver extends OAuthProviderResolverBase {
  constructor(protected readonly service: OAuthProviderService) {
    super(service);
  }
}
