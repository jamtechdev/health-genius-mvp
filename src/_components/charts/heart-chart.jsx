import dynamic from "next/dynamic";

// Dynamically import ApexCharts (no SSR)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function HeartRateChart({ data, title = "Heart Rate Monitoring" }) {
    const { bpm, timestamps } = data;

    const options = {
        series: [{ name: "Heart Rate (BPM)", data: bpm }],
        chart: { type: "area", height: 350, zoom: { enabled: false }, background: "transparent" },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2, colors: ["#00c9a7"] },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "vertical",
                gradientToColors: ["#3ae374"],
                opacityFrom: 0.6,
                opacityTo: 0.05,
                stops: [0, 90, 100],
            },
        },
        title: {
            text: title,
            align: "left",
            style: { color: "#fff" },
        },
        subtitle: {
            text: "BPM vs Time",
            align: "left",
            style: { color: "#fff" },
        },
        labels: timestamps,
        xaxis: {
            type: "datetime",
            labels: { style: { colors: "#fff" } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            opposite: true,
            labels: { style: { colors: "#fff" } },
            title: { text: "BPM", style: { color: "#fff" } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        grid: { borderColor: "rgba(255,255,255,0.1)", row: { colors: ["transparent"] } },
        legend: { horizontalAlign: "left", labels: { colors: "#fff" } },
        tooltip: { theme: "dark", x: { format: "HH:mm" } },
    };

    return <Chart options={options} series={options.series} type="area" height={350} />;
}
