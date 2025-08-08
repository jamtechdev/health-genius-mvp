import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ApexCharts (no SSR)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RunningScoreChart({ data = [], categories = [] }) {
    const options = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: { show: false },
            background: "transparent",
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                borderRadiusApplication: "end",
                barHeight: "70%",
            },
        },
        dataLabels: {
            enabled: true,
            style: { colors: ["#fff"] },
        },
        xaxis: {
            categories,
            title: {
                text: "Minutes of Running",
                style: { color: "#fff", fontFamily: "Inter, sans-serif" },
            },
            labels: {
                style: { colors: "#fff", fontFamily: "Inter, sans-serif" },
            },
        },
        yaxis: {
            labels: {
                style: { colors: "#fff", fontFamily: "Inter, sans-serif" },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                gradientToColors: ["#00E396"],
                inverseColors: false,
                stops: [0, 100],
            },
        },
        colors: ["#00B894"], // starting gradient color
        grid: {
            borderColor: "rgba(255,255,255,0.1)",
            row: { colors: ["transparent"] },
        },
        tooltip: {
            theme: "dark",
            y: { formatter: val => `${val} minutes` },
        },
        legend: { show: false },
    };

    const series = [
        {
            name: "Running (mins)",
            data,
        },
    ];

    return <Chart options={options} series={series} type="bar" height={350} />;
}
