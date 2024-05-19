import { Module } from "@nestjs/common";
import { InboxModuleBase } from "./base/inbox.module.base";
import { InboxService } from "./inbox.service";
import { InboxController } from "./inbox.controller";
import { InboxResolver } from "./inbox.resolver";

@Module({
  imports: [InboxModuleBase],
  controllers: [InboxController],
  providers: [InboxService, InboxResolver],
  exports: [InboxService],
})
export class InboxModule {}
