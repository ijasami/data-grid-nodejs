import React from "react";
import { formatValue } from "../../utils/helper";

interface TableHeaderProps {
  totals: {
    totalPotentialRevenue: number;
    totalCompetitorProcessing: number;
    totalCompetitorMerchant: number;
    totalRevenuePerAccount: number;
    totalMarketShare: number;
    totalDdaActions: number;
  };
  handleSort: (key: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ totals, dropdownValue, handleSort }) => (
  <thead>
    <tr>
      <th onClick={() => handleSort("location")}>Location</th>
      <th onClick={() => handleSort("potentialRevenue")}>
        Potential Revenue
      </th>
      <th onClick={() => handleSort("competitorProcessing")}>
        Competitor Processing
      </th>
      <th onClick={() => handleSort("competitorMerchant")}>
        Competitor Merchant
      </th>
      <th onClick={() => handleSort("revenuePerAccount")}>
        Revenue/Account
      </th>
      <th onClick={() => handleSort("marketShare")}>Market Share</th>
      <th onClick={() => handleSort("ddaActions")}>Commercial DDA's Action</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>{ dropdownValue === 'Location' ? "US": "Branch Name"}</td>
      <td>{formatValue(totals.totalPotentialRevenue)}</td>
      <td>{formatValue(totals.totalCompetitorProcessing)}</td>
      <td>{totals.totalCompetitorMerchant}</td>
      <td>{totals.totalRevenuePerAccount}</td>
      <td>{totals.totalMarketShare.toFixed(2)}%</td>
      <td>{totals.totalDdaActions}</td>
      <td>-</td>
    </tr>
  </thead>
);

export default TableHeader;
