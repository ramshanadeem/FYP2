/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
import Button from "components/CustomButtons/Button.js";
// import { BaseOptionChart } from "../../charts";

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: "Team A",
    type: "column",
    data: [23, 11, 22],
  },
  //   {
  //     name: "Team B",
  //     type: "area",
  //     data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
  //   },
  //   {
  //     name: "Team C",
  //     type: "line",
  //     data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  //   },
];

export default function AppWebsiteVisits() {
  const chartOptions = merge({
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["solid", "gradient", "solid"] },
    labels: ["Axiety", "Trauma", "Stress"],
    xaxis: { type: "text" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });

  return (
    <>
      <div style={{ marginTop: "20px", marginLeft: " 8%", width: "80%" }}>
        <Card>
          <CardHeader
            title="Screening Chart Ratio"
            subheader="(+43%) than last year"
          />
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <ReactApexChart
              type="line"
              series={CHART_DATA}
              options={chartOptions}
              height={364}
            />
          </Box>
        </Card>
      </div>
      <div style={{ marginLeft: "33%", marginTop: "2%" }}>
        <Button
          color="danger"
          size="lg"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr Suggestion
        </Button>
        <Button
          color="danger"
          size="lg"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Excercise Suggestion
        </Button>
      </div>
    </>
  );
}
