import {
  useDataProvider,
} from "react-admin";

import { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";

type Stats = any;

const formatNumber = (value: number | string | undefined | null) => {
  if (value === undefined || value === null || value === "") {
    return "0";
  }
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return String(value);
  }
  return numeric.toLocaleString();
};

const formatCurrency = (value: number | string | undefined | null) => {
  if (value === undefined || value === null || value === "") {
    return "KES 0.00";
  }
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return String(value);
  }
  return `KES ${numeric.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const Dashboard = () => {
  const dataProvider = useDataProvider();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const adminStats = await dataProvider.get("admin-dashboard", {});

        console.log("Fetched dashboard stats:", adminStats);
        setStats(adminStats);
      } catch (e) {
        console.error("Dashboard error:", e);
      }
    };

    fetchStats();
  }, [dataProvider]);

  const cards = useMemo(
    () => [
      {
        title: "Total Members",
        value: formatNumber(stats?.member_stats?.total_members),
        subtitle: `New: ${formatNumber(stats?.member_stats?.new_members)} | Male: ${formatNumber(stats?.member_stats?.male)} | Female: ${formatNumber(stats?.member_stats?.female)}`,
        accentColor: "#2e7d32",
        divider: true,
      },
      {
        title: "Milk Collections (This Month)",
        value: `${formatNumber(stats?.milk_collection_stat?.milk_this_month)} Kgs`,
        subtitle: `Today: ${formatNumber(stats?.milk_collection_stat?.milk_today)} Kgs`,
        accentColor: "#f57c00",
        divider: true,
      },
      {
        title: "Store Sales (This Month)",
        value: formatCurrency(stats?.store_sale_stat?.total_store_sale_this_month),
        subtitle: `Today: ${formatCurrency(stats?.store_sale_stat?.total_store_sale_today)} | Cash: ${formatCurrency(stats?.store_sale_stat?.cash_store_sale_today)}`,
        accentColor: "#ff9800",
      },
      {
        title: "Total Supplies",
        value: formatNumber(stats?.supply_stats?.supplied_items_this_month),
        subtitle: `Today: ${formatNumber(stats?.supply_stats?.supplied_items_today)} | Supplies: ${formatNumber(stats?.supply_stats?.supplies_today)}`,
        accentColor: "#1e88e5",
      },
      {
        title: "Milk Deliveries (This Month)",
        value: formatNumber(stats?.milk_delivery_stat?.month),
        subtitle: `Today: ${formatNumber(stats?.milk_delivery_stat?.today)}`,
        accentColor: "#2e7d32",
      },
      {
        title: "Milk Rejects (This Month)",
        value: `${formatNumber(stats?.milk_reject_stat?.month)} Kgs`,
        subtitle: `Today: ${formatNumber(stats?.milk_reject_stat?.today)} Kgs`,
        accentColor: "#d32f2f",
      },
      {
        title: "Total Loans",
        value: formatNumber(stats?.loan_stat?.total_loans ?? stats?.outstanding_loans),
        subtitle: `Pending: ${formatNumber(stats?.loan_stat?.pending_loans)} | Approved: ${formatNumber(stats?.loan_stat?.approved_loans)}`,
        accentColor: "#ff9800",
      },
      {
        title: "Total Loan Amount",
        value: formatCurrency(stats?.loan_stat?.total_amount),
        subtitle: `Approved: ${formatCurrency(stats?.loan_stat?.approved_amount ?? stats?.loan_stat?.total_amount_approved)}`,
        accentColor: "#ff9800",
      },
    ],
    [stats]
  );

  if (!stats) {
    return <Typography>Loading dashboard...</Typography>;
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {cards.map(card => (
          <Card
            key={card.title}
            elevation={2}
            sx={{
              width: "100%",
              minHeight: 150,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
              height: "100%",
            }}
          >
            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "text.secondary",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                  {card.value}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ whiteSpace: "pre-line", color: card.accentColor ?? "text.secondary" }}>
                {card.subtitle}
              </Typography>
            </CardContent>
            {card.divider && (
              <Box sx={{ height: 4, width: "100%", backgroundColor: card.accentColor ?? "#1976d2", borderRadius: "0 0 12px 12px" }} />
            )}
          </Card>
        ))}
      </Box>

    </Box>
  );
};