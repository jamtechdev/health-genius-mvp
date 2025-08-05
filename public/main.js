const nutritionId = document.getElementById("nutrition");
const sleepId = document.getElementById("sleep");
const activityId = document.getElementById("activity");
const totalhealthId = document.getElementById("total-health");
const heartrateId = document.getElementById("heart-rate");
const runningscoreId = document.getElementById("running-score");
const sleepQualityId = document.getElementById("sleep-quality");
const energyLevelId = document.getElementById("energy-level");
const dnasimulatorlId = document.getElementById("dna-simulator");

if (nutritionId) {
  var options = {
    series: [
      {
        name: "Calories Intake (kcal)",
        data: [
          1800, 1900, 1750, 2000, 1850, 1950, 1800, 2100, 1950, 2000, 1850,
          1900, 1880, 2000, 2050, 1980, 1900, 1820, 1920, 1950, 1980, 2000,
        ],
      },
    ],
    chart: {
      type: "area",
      height: 150,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FF9F1C"], // orange (nutrition)
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
            color: "#FF9F1C",
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
      categories: Array.from(
        { length: 22 },
        (_, i) => `${String(i + 1).padStart(2, "0")} Jan`
      ),
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { show: false },
    },
    yaxis: { show: false, max: 2500, min: 1500 },
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
  new ApexCharts(nutritionId, options).render();
}

if (sleepId) {
  var options = {
    series: [
      {
        name: "Sleep Duration (hrs)",
        data: [
          7, 6.5, 8, 7.2, 6.8, 7.5, 8.1, 7.6, 6.9, 7.3, 7.4, 6.7, 7.8, 8.2, 7.9,
          7.1, 6.5, 7.6, 7.3, 7.4, 7.2, 7.5,
        ],
      },
    ],
    chart: {
      type: "area",
      height: 150,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#3ABEFF"], // light blue (sleep)
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
            color: "#3ABEFF",
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
      categories: Array.from(
        { length: 22 },
        (_, i) => `${String(i + 1).padStart(2, "0")} Jan`
      ),
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { show: false },
    },
    yaxis: { show: false, max: 10, min: 5 },
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
  new ApexCharts(sleepId, options).render();
}

if (activityId) {
  var options = {
    series: [
      {
        name: "Steps Taken",
        data: [
          4000, 4500, 5200, 6000, 5800, 6100, 7200, 6900, 7500, 7300, 7000,
          6900, 6800, 7200, 7400, 7600, 7300, 7100, 7200, 7400, 7500, 7800,
        ],
      },
    ],
    chart: {
      type: "area",
      height: 150,
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
          {
            offset: 0,
            color: "#8FFF00",
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
      categories: Array.from(
        { length: 22 },
        (_, i) => `${String(i + 1).padStart(2, "0")} Jan`
      ),
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
  new ApexCharts(activityId, options).render();
}

if (totalhealthId) {
  var options = {
    series: [80],
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
        hollow: {
          background: "transparent",
          size: "50%",
        },
        track: {
          background: "transparent",
          strokeWidth: "100%",
        },
        dataLabels: {
          show: true,
          name: {
            fontSize: "12px",
            color: "#ffffff",
            fontFamily: "Exo 2, sans-serif",
            offsetY: 40,
          },
          value: {
            fontSize: "30px",
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "Exo 2, sans-serif",
            offsetY: 0,
            formatter: function (val) {
              return val + "%";
            },
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
    // Removed stroke.dashArray to make it smooth
    labels: ["Well being score"],
  };

  new ApexCharts(totalhealthId, options).render();
}

if (heartrateId) {
  var heartRateData = {
    bpm: [72, 75, 70, 80, 76, 74, 78, 73, 77, 75, 74, 72],
    timestamps: [
      "2025-08-01T09:00:00",
      "2025-08-01T10:00:00",
      "2025-08-01T11:00:00",
      "2025-08-01T12:00:00",
      "2025-08-01T13:00:00",
      "2025-08-01T14:00:00",
      "2025-08-01T15:00:00",
      "2025-08-01T16:00:00",
      "2025-08-01T17:00:00",
      "2025-08-01T18:00:00",
      "2025-08-01T19:00:00",
      "2025-08-01T20:00:00",
    ],
  };

  var options = {
    series: [
      {
        name: "Heart Rate (BPM)",
        data: heartRateData.bpm,
      },
    ],
    chart: {
      type: "area",
      height: 350,
      zoom: { enabled: false },
      background: "transparent",
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#00c9a7"], // Teal line
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#3ae374"], // Green end
        opacityFrom: 0.6,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    title: {
      text: "Heart Rate Monitoring",
      align: "left",
      style: { color: "#ffffff" },
    },
    subtitle: {
      text: "BPM vs Time",
      align: "left",
      style: { color: "#ffffff" },
    },
    labels: heartRateData.timestamps,
    xaxis: {
      type: "datetime",
      labels: { style: { colors: "#ffffff" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      opposite: true,
      labels: { style: { colors: "#ffffff" } },
      title: {
        text: "BPM",
        style: { color: "#ffffff" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: {
      borderColor: "rgba(255,255,255,0.1)",
      row: {
        colors: ["transparent"],
      },
    },
    legend: {
      horizontalAlign: "left",
      labels: { colors: "#ffffff" },
    },
    tooltip: {
      theme: "dark",
      x: { format: "HH:mm" },
    },
  };

  new ApexCharts(heartrateId, options).render();
}

if (runningscoreId) {
  var options = {
    series: [
      {
        name: "Running (mins)",
        data: [30, 45, 20, 60, 40, 20, 50],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
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
      style: {
        colors: ["#fff"],
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      title: {
        text: "Minutes of Running",
        style: {
          color: "#fff",
          fontFamily: "Inter, sans-serif",
        },
      },
      labels: {
        style: {
          colors: "#ffffff",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff",
          fontFamily: "Inter, sans-serif",
        },
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
      row: {
        colors: ["transparent"],
      },
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `${val} minutes`,
      },
    },
    legend: {
      show: false,
    },
  };

  new ApexCharts(runningscoreId, options).render();
}

if (sleepQualityId) {
  var options = {
    series: [
      {
        name: "Sleep Quality",
        data: [78, 85, 60, 90, 72, 88, 95], // sample sleep scores for the week
      },
    ],
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        barHeight: "70%",
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      title: {
        text: "Sleep Quality (%)",
        style: {
          color: "#fff",
          fontFamily: "Inter, sans-serif",
        },
      },
      labels: {
        style: {
          colors: "#ffffff",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    yaxis: {
      max: 100,
      labels: {
        style: {
          colors: "#ffffff",
          fontFamily: "Inter, sans-serif",
        },
      },
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
      row: {
        colors: ["transparent"],
      },
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    legend: {
      show: false,
    },
  };

  new ApexCharts(sleepQualityId, options).render();
}

if (energyLevelId) {
  var options = {
    series: [
      {
        name: "Energy Range",
        data: [
          { x: "Mon", y: [4, 7] },
          { x: "Tue", y: [5, 8] },
          { x: "Wed", y: [3, 6] },
          { x: "Thu", y: [6, 9] },
          { x: "Fri", y: [5, 8] },
          { x: "Sat", y: [7, 9] },
          { x: "Sun", y: [6, 8] },
        ],
      },
    ],
    chart: {
      type: "rangeArea",
      height: 350,
      toolbar: { show: false },
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
            {
              offset: 0,
              color: "#FFA726",
              opacity: 0.6,
            },
            {
              offset: 100,
              color: "#FF6B6B",
              opacity: 0.9,
            },
          ],
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: "#fff",
          fontFamily: "Inter, sans-serif",
        },
      },
      title: {
        text: "Day of the Week",
        style: {
          color: "#fff",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    yaxis: {
      max: 10,
      title: {
        text: "Energy Level (0–10)",
        style: {
          color: "#fff",
          fontFamily: "Inter, sans-serif",
        },
      },
      labels: {
        style: {
          colors: "#fff",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    tooltip: {
      theme: "dark",
      shared: false,
      y: {
        formatter: (val) => `${val} / 10`,
      },
    },
    grid: {
      borderColor: "rgba(255,255,255,0.1)",
    },
  };

  new ApexCharts(energyLevelId, options).render();
}

if (dnasimulatorlId) {
  var options = {
  series: [70, 55, 80, 65, 90],
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
  labels: ["Gene A", "Gene B", "Gene C", "Gene D", "Gene E"],
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
    y: {
      formatter: (val) => `${val}% Activation`,
    },
  },
};


  new ApexCharts(dnasimulatorlId, options).render();
}
