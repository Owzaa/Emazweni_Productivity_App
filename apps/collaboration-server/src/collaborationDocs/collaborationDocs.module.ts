import { Module } from "@nestjs/common";
import { CollaborationDocsModuleBase } from "./base/collaborationDocs.module.base";
import { CollaborationDocsService } from "./collaborationDocs.service";
import { CollaborationDocsController } from "./collaborationDocs.controller";
import { CollaborationDocsResolver } from "./collaborationDocs.resolver";

@Module({
  imports: [CollaborationDocsModuleBase],
  controllers: [CollaborationDocsController],
  providers: [CollaborationDocsService, CollaborationDocsResolver],
  exports: [CollaborationDocsService],
})
export class CollaborationDocsModule {}
