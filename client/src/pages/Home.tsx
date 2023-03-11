import React from "react";
import { useList } from "@pankod/refine-core";
import { Typography, Stack, Box } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sales"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#c4e4ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={["#475be8", "#c4e4ef"]}
        />
        <PieChart
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={["#475be8", "#c4e4ef"]}
        />
        <PieChart
          title="Properties for cities"
          value={554}
          series={[75, 25]}
          colors={["#475be8", "#c4e4ef"]}
        />
      </Box>
      <Stack mt="25px" width="100%" direction={{ xs: "column", lg: "row" }}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default Home;
