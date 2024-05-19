import { UniversalSearchWhereInput } from "./UniversalSearchWhereInput";
import { UniversalSearchOrderByInput } from "./UniversalSearchOrderByInput";

export type UniversalSearchFindManyArgs = {
  where?: UniversalSearchWhereInput;
  orderBy?: Array<UniversalSearchOrderByInput>;
  skip?: number;
  take?: number;
};
