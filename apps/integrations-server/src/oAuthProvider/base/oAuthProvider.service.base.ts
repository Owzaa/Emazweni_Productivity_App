/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OAuthProvider as PrismaOAuthProvider } from "@prisma/client";

export class OAuthProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OAuthProviderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.oAuthProvider.count(args);
  }

  async oAuthProviders<T extends Prisma.OAuthProviderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OAuthProviderFindManyArgs>
  ): Promise<PrismaOAuthProvider[]> {
    return this.prisma.oAuthProvider.findMany<Prisma.OAuthProviderFindManyArgs>(
      args
    );
  }
  async oAuthProvider<T extends Prisma.OAuthProviderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OAuthProviderFindUniqueArgs>
  ): Promise<PrismaOAuthProvider | null> {
    return this.prisma.oAuthProvider.findUnique(args);
  }
  async createOAuthProvider<T extends Prisma.OAuthProviderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OAuthProviderCreateArgs>
  ): Promise<PrismaOAuthProvider> {
    return this.prisma.oAuthProvider.create<T>(args);
  }
  async updateOAuthProvider<T extends Prisma.OAuthProviderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OAuthProviderUpdateArgs>
  ): Promise<PrismaOAuthProvider> {
    return this.prisma.oAuthProvider.update<T>(args);
  }
  async deleteOAuthProvider<T extends Prisma.OAuthProviderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OAuthProviderDeleteArgs>
  ): Promise<PrismaOAuthProvider> {
    return this.prisma.oAuthProvider.delete(args);
  }
}
