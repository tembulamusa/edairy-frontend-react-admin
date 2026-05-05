import {
  useDataProvider,
} from "react-admin";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";

type Stats = {
  totalFarmers: number;
  todayMilkLiters: number;
  totalPaymentsDue: number;
  activeRoutes: number;
};

export const Dashboard = () => {
  const dataProvider = useDataProvider();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data: farmers } = await dataProvider.getList("members", {
          pagination: { page: 1, perPage: 5 },
          sort: { field: "id", order: "ASC" },
          filter: {},
        });

        const { data: milk } = await dataProvider.getList("milk_collections", {
          pagination: { page: 1, perPage: 1000 },
          sort: { field: "createdAt", order: "DESC" },
          filter: {
            date: new Date().toISOString().split("T")[0],
          },
        });

        const { data: payments } = await dataProvider.getList("payments_due", {
          pagination: { page: 1, perPage: 1000 },
          sort: { field: "id", order: "ASC" },
          filter: {},
        });

        const { data: routes } = await dataProvider.getList("routes", {
          pagination: { page: 1, perPage: 1000 },
          sort: { field: "id", order: "ASC" },
          filter: {},
        });

        setStats({
          totalFarmers: farmers.length,
          todayMilkLiters: milk.reduce(
            (sum: number, item: any) => sum + (item.liters || 0),
            0
          ),
          totalPaymentsDue: payments.length,
          activeRoutes: routes.length,
        });
      } catch (e) {
        console.error("Dashboard error:", e);
      }
    };

    fetchStats();
  }, [dataProvider]);

  if (!stats) {
    return <Typography>Loading dashboard...</Typography>;
  }

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Dairy Cooperative Dashboard 🥛
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Farmers</Typography>
              <Typography variant="h4">{stats.totalFarmers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Today's Milk (L)</Typography>
              <Typography variant="h4">{stats.todayMilkLiters}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Payments Due</Typography>
              <Typography variant="h4">{stats.totalPaymentsDue}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Routes</Typography>
              <Typography variant="h4">{stats.activeRoutes}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};