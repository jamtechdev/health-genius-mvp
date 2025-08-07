"use client";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });              
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
    const chartOptions = {
        chart: {
            height: 380,
            type: 'radialBar',
            offsetY: -20,
            background: 'transparent',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    background: 'transparent',
                    size: '50%',
                },
                track: {
                    background: 'transparent',
                    strokeWidth: '100%',
                },
                dataLabels: {
                    show: true,
                    name: {
                        fontSize: '12px',
                        color: '#ffffff',
                        fontFamily: 'Exo 2, sans-serif',
                        offsetY: 40,
                    },
                    value: {
                        fontSize: '30px',
                        fontWeight: 700,
                        color: '#ffffff',
                        fontFamily: 'Exo 2, sans-serif',
                        offsetY: 0,
                        formatter: function (val) {
                            return val + '%';
                        },
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.3,
                gradientToColors: ['#00d9a6'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: [
                    { offset: 0, color: '#005f73', opacity: 1 },
                    { offset: 50, color: '#0a9396', opacity: 1 },
                    { offset: 100, color: '#00d9a6', opacity: 1 },
                ],
            },
        },
        labels: ['Well being score'],
    };

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
                                <Chart options={chartOptions} series={[user?.wellbeingScore]} type="radialBar" height={380} />
                                {/* <div id="total-health"></div> */}
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
                                        <div id="nutrition" className="-mt-12 -mb-10"></div>
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
                                        <div id="sleep" className="-mt-12 -mb-10"></div>
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
                                        <div id="activity" className="-mt-12 -mb-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Heart Rate Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("heartRate")}</h3>
                            <div id="heart-rate"></div>
                        </div>

                        {/* <!-- Running Score Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("stepCount")}</h3>
                            <div id="running-score"></div>
                        </div>

                        {/* <!-- Sleep quality Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("sleepQuality")}</h3>
                            <div id="sleep-quality"></div>
                        </div>

                        {/* <!-- Energy quality Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("energyLevel")}</h3>
                            <div id="energy-level"></div>
                        </div>

                        {/* <!-- DNA Simulator Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-12 xl:col-span-12 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">{t("DNASimulator")}</h3>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                                    <div id="dna-simulator"></div>
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