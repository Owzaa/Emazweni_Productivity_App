import { CustomFieldsWhereInput } from "./CustomFieldsWhereInput";
import { CustomFieldsOrderByInput } from "./CustomFieldsOrderByInput";

export type CustomFieldsFindManyArgs = {
  where?: CustomFieldsWhereInput;
  orderBy?: Array<CustomFieldsOrderByInput>;
  skip?: number;
  take?: number;
};
