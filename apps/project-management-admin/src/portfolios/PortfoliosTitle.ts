import { Portfolios as TPortfolios } from "../api/portfolios/Portfolios";

export const PORTFOLIOS_TITLE_FIELD = "id";

export const PortfoliosTitle = (record: TPortfolios): string => {
  return record.id?.toString() || String(record.id);
};
