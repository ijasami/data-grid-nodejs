import { Product } from "types/Product";

export const formatValue = (value: number): string => {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value}`;
};

export const calculateTotals = (product: Product[]) => {
  const totalPotentialRevenue = product.reduce(
    (acc, row) => acc + row.potentialRevenue,
    0
  );
  const totalCompetitorProcessing = product.reduce(
    (acc, row) => acc + row.competitorProcessing,
    0
  );
  const totalCompetitorMerchant = product.reduce(
    (sum, row) => sum + row.competitorMerchant,
    0
  );
  const totalRevenuePerAccount = product.reduce(
    (sum, row) => sum + row.revenuePerAccount,
    0
  );
  const totalMarketShare = product.reduce(
    (sum, row) => parseFloat(row.marketShare.toString()) + sum,
    0
  );
  const totalDdaActions = product.reduce((sum, row) => sum + row.ddaActions, 0);

  return {
    totalPotentialRevenue,
    totalCompetitorProcessing,
    totalCompetitorMerchant,
    totalRevenuePerAccount,
    totalMarketShare,
    totalDdaActions,
  };
};

