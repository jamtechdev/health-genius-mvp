import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts (no SSR)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DailySleepChart = ({ series, categories, colors, names, height = 150, yaxisMin, yaxisMax }) => {
    const options = {
        chart: { type: "area", height, zoom: { enabled: false }, toolbar: { show: false } },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2 },
        colors,
        fill: {
            type: "gradient",
            gradient: {
                stops: [0, 100],
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.1,
                colorStops: [
                    { offset: 0, color: colors[0], opacity: 0.4 },
                    { offset: 100, color: "#121212", opacity: 0.05 },
                ],
            },
        },
        xaxis: { categories, axisTicks: { show: false }, axisBorder: { show: false }, labels: { show: false } },
        yaxis: { show: false, min: yaxisMin, max: yaxisMax },
        grid: { show: false },
        legend: { show: true, position: "top", fontSize: "12px", labels: { colors: "#A1A1AA" }, markers: { width: 8, height: 8, radius: 50, shape: "circle" } },
        tooltip: { theme: "dark" },
    };

    // Map data to series format with names
    const chartSeries = series.map((data, i) => ({ name: names[i], data }));

    return <Chart options={options} series={chartSeries} type="area" height={height} />;
};

export default DailySleepChart;
