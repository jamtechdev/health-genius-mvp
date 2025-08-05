"use client";
import { useEffect, useState } from "react";
import { mockUsers } from "@/app/api/data/user";
import details from "../app/api/user.json";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const id = localStorage.getItem("user");
        if (!id) return;

        let authUser = JSON.parse(id);
        const foundUser = mockUsers.find(u => u.id === authUser?.id);
        const foundDetail = details.find(d => d.id === authUser?.id);
        if (foundUser && foundDetail) {
            setUser({ ...foundUser, ...foundDetail });
        }
    }, []);

    return (
        <>
            {user?.type == "B2C" &&
                <div className="min-h-screen lg:p-6 p-4 min-h-[calc(100vh-132px)]">
                    <h1>Single Profile</h1>
                    <div className="grid grid-cols-12 gap-6">
                        <a href="/dashboard.html"
                            className="card group relative flex flex-col items-center text-center shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl cursor-pointer !p-0 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2">
                            <div className="w-full overflow-hidden">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Julie"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 right-0 w-full px-4 pt-20 pb-5 bg-gradient-to-b from-transparent to-[#01424d] ">
                                <div
                                    className="transition-all duration-500 group-hover:translate-y-[-8px] text-left relative">
                                    <h2 className="text-xl font-semibold text-white">
                                        {user?.name}, {user?.age}
                                    </h2>
                                    <p className="text-sm text-gray-300">
                                        {user?.description}
                                    </p>
                                    <i
                                        className="ph ph-arrow-up-right absolute text-3xl bottom-0 right-0 transition-all duration-500 group-hover:rotate-[45deg]"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            }
            {user?.type == "B2B" &&
                <>
                    <div className="min-h-screen">

                        <main className="lg:p-6 p-4 min-h-[calc(100vh-132px)]">
                            <div className="grid grid-cols-12 gap-6">
                                {/* <!-- Julie --> */}
                                <a href="/dashboard.html"
                                    className="card group relative flex flex-col items-center text-center shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl cursor-pointer !p-0 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2">
                                    <div className="w-full overflow-hidden">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="Julie"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 w-full px-4 pt-20 pb-5 bg-gradient-to-b from-transparent to-[#01424d] ">
                                        <div
                                            className="transition-all duration-500 group-hover:translate-y-[-8px] text-left relative">
                                            <h2 className="text-xl font-semibold text-white">Julie,
                                                28</h2>
                                            <p className="text-sm text-gray-300">Stressed
                                                Executive</p>
                                            <i
                                                className="ph ph-arrow-up-right absolute text-3xl bottom-0 right-0 transition-all duration-500 group-hover:rotate-[45deg]"></i>
                                        </div>
                                    </div>
                                </a>

                                {/* <!-- Karim --> */}
                                <a href="/dashboard.html"
                                    className="card group relative flex flex-col items-center text-center shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl cursor-pointer !p-0 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2">
                                    <div className="w-full overflow-hidden">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/45.jpg"
                                            alt="Karim"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 w-full px-4 pt-20 pb-5 bg-gradient-to-b from-transparent to-[#01424d] ">
                                        <div
                                            className="transition-all duration-500 group-hover:translate-y-[-8px] text-left relative">

                                            <h2 className="text-xl font-semibold text-white">Karim,
                                                45</h2>
                                            <p className="text-sm text-gray-300">Irregular
                                                Lifestyle</p>
                                            <i
                                                className="ph ph-arrow-up-right absolute text-3xl bottom-0 right-0 transition-all duration-500 group-hover:rotate-[45deg]"></i>
                                        </div>
                                    </div>
                                </a>

                                {/* <!-- Marie --> */}
                                <a href="/dashboard.html"
                                    className="card group relative flex flex-col items-center text-center shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl cursor-pointer !p-0 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2">
                                    <div className="w-full overflow-hidden">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/68.jpg"
                                            alt="Marie"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 w-full px-4 pt-20 pb-5 bg-gradient-to-b from-transparent to-[#01424d] ">
                                        <div
                                            className="transition-all duration-500 group-hover:translate-y-[-8px] text-left relative">

                                            <h2 className="text-xl font-semibold text-white">Marie,
                                                68</h2>
                                            <p className="text-sm text-gray-300">Active Senior</p>
                                            <i
                                                className="ph ph-arrow-up-right absolute text-3xl bottom-0 right-0 transition-all duration-500 group-hover:rotate-[45deg]"></i>
                                        </div>
                                    </div>
                                </a>

                                {/* <!-- Lucas --> */}
                                <a href="/dashboard.html"
                                    className="card group relative flex flex-col items-center text-center shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl cursor-pointer !p-0 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2">
                                    <div className="w-full overflow-hidden">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/36.jpg"
                                            alt="Lucas"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 w-full px-4 pt-20 pb-5 bg-gradient-to-b from-transparent to-[#01424d] ">
                                        <div
                                            className="transition-all duration-500 group-hover:translate-y-[-8px] text-left relative">

                                            <h2 className="text-xl font-semibold text-white">Lucas,
                                                36</h2>
                                            <p className="text-sm text-gray-300">Corporate Wellness
                                                (B2B)</p>
                                            <i
                                                className="ph ph-arrow-up-right absolute text-3xl bottom-0 right-0 transition-all duration-500 group-hover:rotate-[45deg]"></i>
                                        </div>
                                    </div>
                                </a>

                                {/* <!-- Emma --> */}
                                <a href="/dashboard.html"
                                    className="card group relative flex flex-col items-center text-center shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl cursor-pointer !p-0 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2">
                                    <div className="w-full overflow-hidden">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/40.jpg"
                                            alt="Emma"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 w-full px-4 pt-20 pb-5 bg-gradient-to-b from-transparent to-[#01424d] ">
                                        <div
                                            className="transition-all duration-500 group-hover:translate-y-[-8px] text-left relative">

                                            <h2 className="text-xl font-semibold text-white">Emma,
                                                40</h2>
                                            <p className="text-sm text-gray-300">Insurance Client
                                                (B2B)</p>
                                            <i
                                                className="ph ph-arrow-up-right absolute text-3xl bottom-0 right-0 transition-all duration-500 group-hover:rotate-[45deg]"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </main>

                    </div>
                </>}
        </>
    )
}