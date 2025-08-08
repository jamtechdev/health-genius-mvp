import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function EnergyLevelChart({ data = [] }) {
    const options = {
        chart: {
            type: "rangeArea",
            height: 350,
            toolbar: { show: false },
            background: "transparent",
        },
        colors: ["#FF8C00"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0.9,
                stops: [0, 100],
                colorStops: [
                    [
                        { offset: 0, color: "#FFA726", opacity: 0.6 },
                        { offset: 100, color: "#FF6B6B", opacity: 0.9 },
                    ],
                ],
            },
        },
        dataLabels: { enabled: false },
        xaxis: {
            type: "category",
            labels: { style: { colors: "#fff", fontFamily: "Inter, sans-serif" } },
            title: { text: "Day of the Week", style: { color: "#fff", fontFamily: "Inter, sans-serif" } },
        },
        yaxis: {
            max: 10,
            title: { text: "Energy Level (0–10)", style: { color: "#fff", fontFamily: "Inter, sans-serif" } },
            labels: { style: { colors: "#fff", fontFamily: "Inter, sans-serif" } },
        },
        tooltip: {
            theme: "dark",
            shared: false,
            y: { formatter: val => `${val} / 10` },
        },
        grid: { borderColor: "rgba(255,255,255,0.1)" },
    };

    const series = [
        {
            name: "Energy Range",
            data,
        },
    ];

    return <Chart options={options} series={series} type="rangeArea" height={350} />;
}
