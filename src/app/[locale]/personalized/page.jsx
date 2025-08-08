"use client";
import Navbar from "@/_components/navbar";
import { useTranslations } from "next-intl";

export default function () {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <main className="lg:p-6 p-4 min-h-[calc(100vh-132px)]">
          <div className="grid grid-cols-1">
            <div className="flex justify-center items-center gap-4 my-4">
              <h6 className="text-sm text-gray-300 font-bold uppercase">
                Filter
              </h6>
              <div className="">
                <ul className="flex flex-wrap justify-center items-center">
                  <li className="me-2">
                    <a
                      href="#"
                      className="bg-[#2dfffe] text-black px-6 py-2 rounded-full text-sm font-semibold border-2 border-[#2dfffe] active"
                    >
                      All
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="bg-transparent text-[#2dfffe] px-6 py-2 rounded-full text-sm font-semibold border-2 border-[#2dfffe] duration-300 hover:text-black hover:bg-[#2dfffe]"
                    >
                      Stress
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="bg-transparent text-[#2dfffe] px-6 py-2 rounded-full text-sm font-semibold border-2 border-[#2dfffe] duration-300 hover:text-black hover:bg-[#2dfffe]"
                      aria-current="page"
                    >
                      Focus
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="bg-transparent text-[#2dfffe] px-6 py-2 rounded-full text-sm font-semibold border-2 border-[#2dfffe] duration-300 hover:text-black hover:bg-[#2dfffe]"
                    >
                      Sleep
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xl:gap-8 mt-4">
              <div className="bg-[#003d5cE6] card">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-red-500/20 text-red-400 text-xs px-4 py-1 icon-box">
                    STRESS
                  </span>
                  <span className="text-red-400 text-4xl">
                    <i className="ph-fill ph-person-simple-tai-chi"></i>
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  Engage 5-min Mindfulness Protocol
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-gray-500">//</span> Source: Recent
                  Activity Patterns
                </p>
                <div className="flex flex-wrap justify-end space-x-4 mt-8">
                  <button className="px-4 bg-transparent text-[#2dfffe] py-2 cursor-pointer">
                    Archive
                  </button>
                  <button className="px-4 bg-[#2dfffe]/30 text-[#2dfffe] py-2 icon-box hover:[#2dfffe]/50 cursor-pointer">
                    Log as Executed
                  </button>
                </div>
              </div>

              <div className="bg-[#003d5cE6] card">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-green-500/20 text-green-400 text-xs px-4 py-1 icon-box">
                    FOCUS
                  </span>
                  <span className="text-green-400 text-4xl">
                    <i className="ph-fill ph-user-focus"></i>
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  Initiate Nature Excursion <br />
                  (Device-Free)
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-gray-500">=</span> Rationale: Cognitive
                  Load Reset
                </p>
                <div className="flex flex-wrap justify-end space-x-4 mt-8">
                  <button className="px-4 bg-transparent text-[#2dfffe] py-2 cursor-pointer">
                    Archive
                  </button>
                  <button className="px-4 bg-[#2dfffe]/30 text-[#2dfffe] py-2 icon-box hover:[#2dfffe]/50 cursor-pointer">
                    Log as Executed
                  </button>
                </div>
              </div>

              <div className="bg-[#003d5cE6] card">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-purple-500/20 text-purple-400 text-xs px-4 py-1 icon-box">
                    SLEEP
                  </span>
                  <span className="text-purple-400 text-4xl">
                    <i className="ph-fill ph-moon"></i>
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  Enforce 'No-Screen' <br />
                  Mandate Pre-Stasis
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-gray-500">=</span> Source: Sleep Quality
                  Telemetry
                </p>
                <div className="flex flex-wrap justify-end space-x-4 mt-8">
                  <button className="px-4 bg-transparent text-[#2dfffe] py-2 cursor-pointer">
                    Archive
                  </button>
                  <button className="px-4 bg-[#2dfffe]/30 text-[#2dfffe] py-2 icon-box hover:[#2dfffe]/50 cursor-pointer">
                    Log as Executed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
