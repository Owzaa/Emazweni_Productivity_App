import { PortfoliosWhereInput } from "./PortfoliosWhereInput";
import { PortfoliosOrderByInput } from "./PortfoliosOrderByInput";

export type PortfoliosFindManyArgs = {
  where?: PortfoliosWhereInput;
  orderBy?: Array<PortfoliosOrderByInput>;
  skip?: number;
  take?: number;
};
