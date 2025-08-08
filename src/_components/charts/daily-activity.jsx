import React from "react";
import dynamic from "next/dynamic";
// Dynamically import ApexCharts (no SSR)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DailyActivityChart = ({ data, categories, height = 150 }) => {
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
    colors: ["#8FFF00"], // neon green (activity)
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 100],
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.1,
        colorStops: [
          { offset: 0, color: "#8FFF00", opacity: 0.4 },
          { offset: 100, color: "#121212", opacity: 0.05 },
        ],
      },
    },
    xaxis: {
      categories,
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { show: false },
    },
    yaxis: { show: false, max: 10000, min: 3000 },
    grid: { show: false },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      labels: { colors: "#A1A1AA" },
      markers: { width: 8, height: 8, radius: 50, shape: "circle" },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const series = [
    {
      name: "Steps Taken",
      data,
    },
  ];

  return <Chart options={options} series={series} type="area" height={height} />;
};

export default DailyActivityChart;
