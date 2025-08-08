import React from "react";
import dynamic from "next/dynamic";
// Dynamically import ApexCharts (no SSR)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DailyVitaminsChart = ({
  series,
  categories,
  height = 150,
  colors = ["#FF9F1C"],
  legendPosition = "top",
  yaxisMin = 1500,
  yaxisMax = 2500,
  name,
}) => {
  const options = {
    chart: {
      type: "area",
      height,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors,
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 100],
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.1,
        colorStops: [
          {
            offset: 0,
            color: colors[0],
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#121212",
            opacity: 0.05,
          },
        ],
      },
    },
    xaxis: {
      categories,
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { show: false },
    },
    yaxis: { show: false, min: yaxisMin, max: yaxisMax },
    grid: { show: false },
    legend: {
      show: true,
      position: legendPosition,
      fontSize: "12px",
      labels: { colors: "#A1A1AA" },
      markers: { width: 8, height: 8, radius: 50, shape: "circle" },
    },
    tooltip: {
      theme: "dark",
    },
  };

  // Ensure series has the right format with name
  const seriesData = series.map((data, index) => ({
    name: name[index] || `Series ${index + 1}`,
    data,
  }));

  return <Chart options={options} series={seriesData} type="area" height={height} />;
};

export default DailyVitaminsChart;
