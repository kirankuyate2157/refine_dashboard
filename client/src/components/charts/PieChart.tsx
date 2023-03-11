import React, { FC } from "react";
import { Typography, Stack, Box } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";

interface PieChartProps {
  title: string;
  value: number;
  colors: Array<string>;
  series: Array<number>;
}

const PieChart: FC<PieChartProps> = (props) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">
          {props.title}
        </Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} mt={1}>
          {props.value}
        </Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors: props.colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={props.series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;
