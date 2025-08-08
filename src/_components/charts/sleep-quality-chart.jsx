import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SleepQualityChart({ data = [], categories = [] }) {
    const options = {
        chart: {
            type: "line",
            height: 350,
            toolbar: { show: false },
            background: "transparent",
        },
        dataLabels: {
            enabled: true,
            style: { colors: ["#fff"] },
        },
        xaxis: {
            categories,
            title: {
                text: "Sleep Quality (%)",
                style: { color: "#fff", fontFamily: "Inter, sans-serif" },
            },
            labels: { style: { colors: "#fff", fontFamily: "Inter, sans-serif" } },
        },
        yaxis: {
            max: 100,
            labels: { style: { colors: "#fff", fontFamily: "Inter, sans-serif" } },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "horizontal",
                gradientToColors: ["#6C5CE7"], // purple-pink
                inverseColors: false,
                stops: [0, 100],
            },
        },
        colors: ["#A29BFE"], // starting gradient color
        grid: {
            borderColor: "rgba(255,255,255,0.1)",
            row: { colors: ["transparent"] },
        },
        tooltip: {
            theme: "dark",
            y: { formatter: val => `${val}%` },
        },
        legend: { show: false },
    };

    const series = [
        {
            name: "Sleep Quality",
            data,
        },
    ];

    return <Chart options={options} series={series} type="line" height={350} />;
}
