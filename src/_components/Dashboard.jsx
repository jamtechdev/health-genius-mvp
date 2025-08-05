"use client";
import { useTranslations } from "next-intl";

export default function Dashboard() {
    const t = useTranslations();
    return (
        <>
            <div className="min-h-screen">
                <main className="lg:p-6 p-4 min-h-[calc(100vh-132px)]">
                    <div className="grid grid-cols-12 gap-4">
                        {/* <!-- Welcome Card --> */}
                        <div
                            className="bg-[#003d5cE6] card col-span-12 lg:col-span-6 xl:col-span-4">
                            <div>
                                <h1 className="text-4xl font-bold">{t("welcomeBack")}</h1>
                                <p>It's great to see you again. Your health
                                    data is ready and waiting.</p>
                            </div>
                            <div className="mt-6">
                                <div id="total-health"></div>
                            </div>
                            <div
                                className="mt-6 flex items-center gap-4 bg-[#001b31] icon-box w-fit text-white p-4">
                                <i className="ph ph-info text-3xl"></i>
                                <div>
                                    <h6 className="text-sm font-bold m-0">Recommendation of
                                        the day</h6>
                                    <small>Drink a glass of water in 1 Hour</small>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Today's Goal Card --> */}
                        <div
                            className="bg-[#003d5cE6] card col-span-12 lg:col-span-6 xl:col-span-4">
                            <h3 className="text-2xl font-bold">Today's goal</h3>
                            <p className="mb-6">Complete your today's goal</p>
                            <div className="space-y-8">
                                {/* <!-- Progress Bar 1 --> */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className="icon-box bg-[#b53faa] p-2 text-white text-4xl">
                                        <i className="ph ph-footprints"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold pb-2 text-lg">6000
                                            steps</h5>
                                        <div className="w-full bg-[#045786] h-4 icon-box">
                                            <div
                                                className="bg-[#b53faa] h-4 text-white text-xs text-center"
                                                style={{ 'width': '85%' }}>85%</div>
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
                                        <h5 className="font-semibold pb-2 text-lg">Drink 1.5
                                            L/day</h5>
                                        <div className="w-full bg-[#045786] h-4 icon-box">
                                            <div
                                                className="bg-[#2196f3] h-4 text-white text-xs text-center"
                                                style={{ 'width': '60%' }}>60%</div>
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
                                        <h5 className="font-semibold pb-2 text-lg">At least
                                            7h sleep</h5>
                                        <div className="w-full bg-[#045786] h-4 icon-box">
                                            <div
                                                className="bg-[#3f51b5] h-4 text-white text-xs text-center"
                                                style={{ width: '40%' }}>40%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <button
                                    className="w-full bg-[#0098c0] text-white py-3 px-6 font-semibold hover:bg-[#00f6ff] hover:text-[#000000] transition-all duration-500 flex items-center justify-center gap-2 icon-box">Explore
                                    My Data</button>
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
                                            className="md:text-3xl text-2xl font-bold uppercase">Nutrition</h3>
                                        <p>Include Omega-3 rich foods.</p>
                                    </div>
                                    <div className="text-right w-full md:w-fit">
                                        <div
                                            className="md:text-4xl text-2xl font-bold absolute top-6 right-6 md:static">82</div>
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
                                            className="md:text-3xl text-2xl font-bold uppercase">Sleep</h3>
                                        <p>Aim for 7-8 hours nightly.</p>
                                    </div>
                                    <div className="text-right w-full md:w-fit">
                                        <div
                                            className="md:text-4xl text-2xl font-bold absolute top-6 right-6 md:static">7h
                                            30m</div>
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
                                            className="md:text-3xl text-2xl font-bold uppercase">Activity</h3>
                                        <p>Take 10-minute breaks to move.</p>
                                    </div>
                                    <div className="text-right w-full md:w-fit">
                                        <div
                                            className="md:text-4xl text-2xl font-bold absolute top-6 right-6 md:static">5.432
                                            steps</div>
                                        <div id="activity" className="-mt-12 -mb-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Heart Rate Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">Heart rate</h3>
                            <div id="heart-rate"></div>
                        </div>

                        {/* <!-- Running Score Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">Step count</h3>
                            <div id="running-score"></div>
                        </div>

                        {/* <!-- Sleep quality Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">Sleep quality</h3>
                            <div id="sleep-quality"></div>
                        </div>

                        {/* <!-- Energy quality Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-6 xl:col-span-6 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">Energy level</h3>
                            <div id="energy-level"></div>
                        </div>

                        {/* <!-- DNA Simulator Chart --> */}
                        <div
                            className="col-span-12 lg:col-span-12 xl:col-span-12 bg-[#003d5cE6] card p-6">
                            <h3 className="text-2xl font-bold mb-4">DNA Simulator</h3>
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
                                                    className="font-semibold text-lg">Cognitive
                                                    Boost</h3>
                                                <p className="text-sm text-gray-300">Above
                                                    average
                                                    neuroplasticity. Quick adaptation in
                                                    novel
                                                    tasks.</p>
                                            </div>
                                        </div>

                                        {/* <!-- Trait 2 --> */}
                                        <div
                                            className="flex items-start gap-4 card">
                                            <div className="text-3xl">💤</div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Sleep
                                                    Efficiency</h3>
                                                <p className="text-sm text-gray-300">REM
                                                    cycles
                                                    highly efficient. Recovery rate:
                                                    optimal.</p>
                                            </div>
                                        </div>

                                        {/* <!-- Trait 3 --> */}
                                        <div
                                            className="flex items-start gap-4 card">
                                            <div className="text-3xl">🏃‍♂️</div>
                                            <div>
                                                <h3
                                                    className="font-semibold text-lg">Fast-Twitch
                                                    Muscle Density</h3>
                                                <p
                                                    className="text-sm text-gray-300">Enhanced
                                                    power
                                                    burst capability. Ideal for
                                                    sprints.</p>
                                            </div>
                                        </div>

                                        {/* <!-- Trait 4 --> */}
                                        <div
                                            className="flex items-start gap-4 card">
                                            <div className="text-3xl">🔬</div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Detox
                                                    Metabolism</h3>
                                                <p
                                                    className="text-sm text-gray-300">Elevated
                                                    CYP450
                                                    enzyme activity. Toxin processing
                                                    boosted.</p>
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