/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  IntegrationSettings as PrismaIntegrationSettings,
} from "@prisma/client";

export class IntegrationSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IntegrationSettingsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.integrationSettings.count(args);
  }

  async integrationSettingsItems<
    T extends Prisma.IntegrationSettingsFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.IntegrationSettingsFindManyArgs>
  ): Promise<PrismaIntegrationSettings[]> {
    return this.prisma.integrationSettings.findMany<Prisma.IntegrationSettingsFindManyArgs>(
      args
    );
  }
  async integrationSettings<T extends Prisma.IntegrationSettingsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntegrationSettingsFindUniqueArgs>
  ): Promise<PrismaIntegrationSettings | null> {
    return this.prisma.integrationSettings.findUnique(args);
  }
  async createIntegrationSettings<
    T extends Prisma.IntegrationSettingsCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.IntegrationSettingsCreateArgs>
  ): Promise<PrismaIntegrationSettings> {
    return this.prisma.integrationSettings.create<T>(args);
  }
  async updateIntegrationSettings<
    T extends Prisma.IntegrationSettingsUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.IntegrationSettingsUpdateArgs>
  ): Promise<PrismaIntegrationSettings> {
    return this.prisma.integrationSettings.update<T>(args);
  }
  async deleteIntegrationSettings<
    T extends Prisma.IntegrationSettingsDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.IntegrationSettingsDeleteArgs>
  ): Promise<PrismaIntegrationSettings> {
    return this.prisma.integrationSettings.delete(args);
  }
}
