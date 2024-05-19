import { CustomStatusesWhereInput } from "./CustomStatusesWhereInput";
import { CustomStatusesOrderByInput } from "./CustomStatusesOrderByInput";

export type CustomStatusesFindManyArgs = {
  where?: CustomStatusesWhereInput;
  orderBy?: Array<CustomStatusesOrderByInput>;
  skip?: number;
  take?: number;
};
