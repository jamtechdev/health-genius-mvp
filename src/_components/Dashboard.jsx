"use client";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HeartRateChart from "./charts/heart-chart";
import RadialBarChart from "./charts/radial-chart-bar";
import RunningScoreChart from "./charts/running-score-chart";
import SleepQualityChart from "./charts/sleep-quality-chart";
import EnergyLevelChart from "./charts/energy-level-chart";
import DnaSimulatorChart from "./charts/dna-simulater-chart";
import DailyVitaminsChart from "./charts/daily-vitamins";
import DailySleepChart from "./charts/daily-sleep";
import DailyActivityChart from "./charts/daily-activity";
export default function Dashboard(props) {
    const { id } = props;
    const t = useTranslations();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const getUser = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/users/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setUser(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching users:', error);
            return null;
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getUser();
    }, []);
    // daily chart data start 
    const nutritionDaily = [
        [
            1800, 1900, 1750, 2000, 1850, 1950, 1800, 2100, 1950, 2000, 1850,
            1900, 1880, 2000, 2050, 1980, 1900, 1820, 1920, 1950, 1980, 2000,
        ],
    ];
    const nutritionCategories = Array.from({ length: 22 }, (_, i) => `${String(i + 1).padStart(2, "0")} Jan`);
    const sleepDaily = [
        [
            7, 6.5, 8, 7.2, 6.8, 7.5, 8.1, 7.6, 6.9, 7.3, 7.4,
            6.7, 7.8, 8.2, 7.9, 7.1, 6.5, 7.6, 7.3, 7.4, 7.2, 7.5,
        ],
    ];
    const sleepCategories = Array.from({ length: 22 }, (_, i) => `${String(i + 1).padStart(2, "0")} Jan`);
    const dailyActivities = [
        4000, 4500, 5200, 6000, 5800, 6100, 7200, 6900, 7500, 7300, 7000,
        6900, 6800, 7200, 7400, 7600, 7300, 7100, 7200, 7400, 7500, 7800,
    ];
    const dailyActivityCategories = Array.from({ length: 22 }, (_, i) => `${String(i + 1).padStart(2, "0")} Jan`);
    // daily chart data end 

    const heartRateData = {
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
    const runningData = [30, 45, 20, 60, 40, 20, 50];
    const runningCategories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const sleepData = [78, 85, 60, 90, 72, 88, 95];
    const sleepDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const energyData = [
        { x: "Mon", y: [4, 7] },
        { x: "Tue", y: [5, 8] },
        { x: "Wed", y: [3, 6] },
        { x: "Thu", y: [6, 9] },
        { x: "Fri", y: [5, 8] },
        { x: "Sat", y: [7, 9] },
        { x: "Sun", y: [6, 8] },
    ];
    const series = [70, 55, 80, 65, 90];
    const labels = ["Gene A", "Gene B", "Gene C", "Gene D", "Gene E"];

    if (loading) return <p>Loading...</p>
    return (
        <>
            <div className="min-h-screen">
                <main className="lg:p-6 p-4 min-h-[calc(100vh-132px)]">
                    <div className="grid grid-cols-12 gap-4">
                        {/* <!-- Welcome Card --> */}
                        <div
                            className="bg-[#003d5cE6] card col-span-12 lg:col-span-6 xl:col-span-4">
                            <div>
                                <h1 className="text-4xl font-bold">{t("welcomeBack")} {user?.name}</h1>
                                <p>{user?.dashboardData?.greeting}</p>
                            </div>
                            <div className="mt-6">
                                <RadialBarChart score={user?.wellbeingScore ?? 0} label="Well being score" />
                            </div>
                            <div
                                className="mt-6 flex items-center gap-4 bg-[#001b31] icon-box w-fit text-white p-4">
                                <i className="ph ph-info text-3xl"></i>
                                <div>
                                    <h6 className="text-sm font-bold m-0">{t("recommendationOfTheDay")}</h6>
                                    <small>{user?.recommendations?.nutrition}</small>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Today's Goal Card --> */}
                        <div
                            className="bg-[#003d5cE6] card col-span-12 lg:col-span-6 xl:col-span-4">
                            <h3 className="text-2xl font-bold">{t("todayGoal")}</h3>
                            <p className="mb-6">{t("completeYourTodayGoal")}</p>
                            <div className="space-y-8">
                                {/* <!-- Progress Bar 1 --> */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className="icon-box bg-[#b53faa] p-2 text-white text-4xl">
                                        <i className="ph ph-footprints"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold pb-2 text-lg">
                                            {user?.dashboardData?.progress?.steps?.count}
                                            {' '}{user?.dashboardData?.progress?.steps?.unit}
                                        </h5>
                                        <div className="w-full bg-[#045786] h-4 icon-box">
                                            <div
                                                className="bg-[#b53faa] h-4 text-white text-xs text-center"
                                                style={{ 'width': user?.dashboardData?.progress?.steps?.percentage + "%" }}>
                                                {user?.dashboardData?.progress?.steps?.percentage}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Progress Bar 2 --> */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className="icon-box bg-[#2196f3] p-2 text-white text-4xl">
                                        <i className="ph ph-drop"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold pb-2 text-lg">
                                            {t("drink")} {user?.dashboardData?.progress?.waterIntake?.amount} {user?.dashboardData?.progress?.waterIntake?.unit}
                                        </h5>
                                        <div className="w-full bg-[#045786] h-4 icon-box">
                                            <div
                                                className="bg-[#2196f3] h-4 text-white text-xs text-center"
                                                style={{ 'width': user?.dashboardData?.progress?.waterIntake?.percentage + '%' }}>
                                                {user?.dashboardData?.progress?.waterIntake?.percentage}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Progress Bar 3 --> */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className="icon-box bg-[#3f51b5] p-2 text-white text-4xl">
                                        <i className="ph ph-moon"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold pb-2 text-lg">
                                            {t("atLeast")} {user?.dashboardData?.progress?.sleep?.duration} sleep
                                        </h5>
                                        <div className="w-full bg-[#045786] h-4 icon-box">
                                            <div
                                                className="bg-[#3f51b5] h-4 text-white text-xs text-center"
                                                style={{ width: user?.dashboardData?.progress?.sleep?.percentage + '%' }}>
                                                {user?.dashboardData?.progress?.sleep?.percentage}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <button
                                    className="w-full bg-[#0098c0] text-white py-3 px-6 font-semibold hover:bg-[#00f6ff] hover:text-[#000000] transition-all duration-500 flex items-center justify-center gap-2 icon-box">{t("exploreMyData")}</button>
                            </div>
                        </div>

                        {/* <!-- Right column metrics (Nutrition, Sleep, Activity) --> */}
                        <div className="space-y-4 col-span-12 lg:col-span-12 xl:col-span-4">
                            <div className="bg-[#003d5cE6] card p-6">
                                <div
                                    className="flex justify-between items-start flex-col md:flex-row">
                                    <div>
                                        <div
                                            className="flex items-center gap-2 mb-1 header-icon bg-[#ff9f1c] text-white p-2 text-4xl icon-box w-fit mb-4">
                                            <i className="ph ph-fork-knife"></i>
                                        </div>
                                        <h3
                                            className="md:text-3xl text-2xl font-bold uppercase">
                                            {t("nutrition")}
                                        </h3>
                                        <p>{user?.recommendations?.nutrition}</p>
                                    </div>
                                    <div className="text-right w-full md:w-fit">
                                        <div
                                            className="md:text-4xl text-2xl font-bold absolute top-6 right-6 md:static">{user?.wellbeingScore}</div>
                                        <div className="-mt-12 -mb-10">
                                            <DailyVitaminsChart
                                                series={nutritionDaily}
                                                categories={nutritionCategories}
                                                colors={["#FF9F1C"]}
                                                name={["Calories Intake (kcal)"]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#003d5cE6] card p-6">
                                <div
                                    className="flex justify-between items-start flex-col md:flex-row">
                                    <div>
                                        <div
                                            className="flex items-center gap-2 mb-1 header-icon bg-[#32aae5] text-white p-2 text-4xl icon-box w-fit mb-4">
                                            <i className="ph ph-moon"></i>
                                        </div>
                                        <h3
                                            className="md:text-3xl text-2xl font-bold uppercase">{t("sleep")}</h3>
                                        <p>{user?.recommendations?.sleep}</p>
                                    </div>
                                    <div className="text-right w-full md:w-fit">
                                        <div
                                            className="md:text-4xl text-2xl font-bold absolute top-6 right-6 md:static">
                                            {user?.dashboardData?.latestMeasurements?.sleepDuration}
                                        </div>
                                        <div className="-mt-12 -mb-10">
                                            <DailySleepChart
                                                series={sleepDaily}
                                                categories={sleepCategories}
                                                colors={["#3ABEFF"]}
                                                names={["Sleep Duration (hrs)"]}
                                                yaxisMin={5}
                                                yaxisMax={10}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#003d5cE6] card p-6">
                                <div
                                    className="flex justify-between items-start flex-col md:flex-row">
                                    <div>
                                        <div
                                            className="flex items-center gap-2 mb-1 header-icon bg-[#4CAF50] text-white p-2 text-4xl icon-box w-fit mb-4">
                                            <i className="ph ph-pulse"></i>
                                        </div>
                                        <h3
                                            className="md:text-3xl text-2xl font-bold uppercase">
                                            {t("activity")}
                                        </h3>
                                        <p>{user?.recommendations?.activity}</p>
                                    </div>
                                    <div className="text-right w-full md:w-fit">
                                        <div
                                            className="md:text-4xl text-2xl font-bold absolute top-6 right-6 md:static">
                                            {user?.dashboardData?.latestMeasurements?.steps}
                                        </div>
                                        <div className="mt-12 mb-10">
                                            <DailyActivityChart data={dailyActivities} categories={dailyActivityCategories} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Heart Rate Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("heartRate")}</h3>
                            <HeartRateChart data={heartRateData} />
                            {/* <div id="heart-rate"></div> */}
                        </div>

                        {/* <!-- Running Score Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("stepCount")}</h3>
                            <RunningScoreChart data={runningData} categories={runningCategories} />
                        </div>

                        {/* <!-- Sleep quality Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("sleepQuality")}</h3>
                            <SleepQualityChart data={sleepData} categories={sleepDay} />
                        </div>

                        {/* <!-- Energy quality Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("energyLevel")}</h3>
                            <EnergyLevelChart data={energyData} />
                        </div>

                        {/* <!-- DNA Simulator Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-12 xl:col-span-12 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("DNASimulator")}</h3>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                    <DnaSimulatorChart series={series} labels={labels} />
                                </div>
                                <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                                        {/* <!-- Trait 1 --> */}
                                        <div
                                            className="flex items-start gap-4 card">
                                            <div className="text-3xl">🧠</div>
                                            <div>
                                                <h3
                                                    className="font-semibold text-lg">{t("cognitiveBoost")}</h3>
                                                <p className="text-sm text-gray-300">{t("aboveAverageNeuroplasticityQuickAdaptationInNovelTasks")}.</p>
                                            </div>
                                        </div>

                                        {/* <!-- Trait 2 --> */}
                                        <div
                                            className="flex items-start gap-4 card">
                                            <div className="text-3xl">💤</div>
                                            <div>
                                                <h3 className="font-semibold text-lg">{t("sleepEfficiency")}</h3>
                                                <p className="text-sm text-gray-300">
                                                    {t("REMCyclesHighlyEfficientRecoveryRateOptimal")}
                                                </p>
                                            </div>
                                        </div>

                                        {/* <!-- Trait 3 --> */}
                                        <div
                                            className="flex items-start gap-4 card">
                                            <div className="text-3xl">🏃‍♂️</div>
                                            <div>
                                                <h3
                                                    className="font-semibold text-lg">{t("fastTwitchMuscleDensity")}</h3>
                                                <p
                                                    className="text-sm text-gray-300">
                                                    {t("enhancedPowerBurstCapabilityIdealForSprints")}
                                                </p>
                                            </div>
                                        </div>

                                        {/* <!-- Trait 4 --> */}
                                        <div
                                            className="flex items-start gap-4 card">
                                            <div className="text-3xl">🔬</div>
                                            <div>
                                                <h3 className="font-semibold text-lg">{t("detoxMetabolism")}</h3>
                                                <p className="text-sm text-gray-300">
                                                    {t("elevatedCYP450EnzymeActivityToxinProcessingBoosted")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}