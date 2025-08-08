import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DnaSimulatorChart({ series = [], labels = [] }) {
    const options = {
        chart: {
            height: 350,
            type: "radialBar",
            background: "transparent",
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    margin: 10,
                    size: "30%",
                    background: "transparent",
                },
                track: {
                    background: "transparent",
                    strokeWidth: "100%",
                    margin: 5,
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 4,
                        color: "#000",
                        opacity: 0.4,
                    },
                },
                dataLabels: {
                    name: {
                        show: true,
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                    },
                    value: {
                        show: true,
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                    },
                },
            },
        },
        colors: ["#00F6FF", "#8E2DE2", "#FF6B6B", "#FFA726", "#4A00E0"],
        labels,
        legend: {
            show: true,
            position: "bottom",
            labels: {
                colors: "#fff",
                fontFamily: "Inter, sans-serif",
            },
        },
        tooltip: {
            theme: "dark",
            y: { formatter: val => `${val}% Activation` },
        },
    };

    return <Chart options={options} series={series} type="radialBar" height={350} />;
}
