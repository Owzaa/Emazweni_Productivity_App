import { AskAiWhereInput } from "./AskAiWhereInput";
import { AskAiOrderByInput } from "./AskAiOrderByInput";

export type AskAiFindManyArgs = {
  where?: AskAiWhereInput;
  orderBy?: Array<AskAiOrderByInput>;
  skip?: number;
  take?: number;
};
