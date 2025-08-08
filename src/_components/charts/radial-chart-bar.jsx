import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RadialBarChart({ score = 0, label = "Well being score" }) {
    const chartOptions = {
        chart: {
            height: 380,
            type: "radialBar",
            offsetY: -20,
            background: "transparent",
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: { background: "transparent", size: "50%" },
                track: { background: "transparent", strokeWidth: "100%" },
                dataLabels: {
                    show: true,
                    name: {
                        fontSize: "12px",
                        color: "#fff",
                        fontFamily: "'Exo 2', sans-serif",
                        offsetY: 40,
                    },
                    value: {
                        fontSize: "30px",
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Exo 2', sans-serif",
                        offsetY: 0,
                        formatter: val => val + "%",
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.3,
                gradientToColors: ["#00d9a6"],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: [
                    { offset: 0, color: "#005f73", opacity: 1 },
                    { offset: 50, color: "#0a9396", opacity: 1 },
                    { offset: 100, color: "#00d9a6", opacity: 1 },
                ],
            },
        },
        labels: [label],
    };

    return <Chart options={chartOptions} series={[score]} type="radialBar" height={380} />;
}
