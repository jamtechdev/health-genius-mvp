"use client";
import Navbar from "@/_components/navbar";
import { useTranslations } from "next-intl";

export default function () {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <main className="lg:p-6 p-4 min-h-[calc(100vh-132px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* <!-- steps Card --> */}
            <div className="bg-[#003d5cE6] card ">
              <div className="flex justify-between items-center">
                <h6 className="text-sm text-gray-300 font-bold uppercase">
                  Steps Count
                </h6>
                <span className="text-[#fd8c25] text-4xl">
                  <i class="ph-fill ph-person-simple-walk"></i>
                </span>
              </div>

              <div className="flex items-baseline">
                <h3 className="md:text-3xl text-2xl font-bold uppercase">
                  3269
                </h3>
                <h5 className="font-semibold ms-[4px] text-sm text-gray-300 ">
                  / 6000
                </h5>
              </div>

              <div className="mt-6">
                <div className="w-full bg-[#045786] h-4 icon-box">
                  <div
                    className="bg-[#fd8c25] h-4 text-white text-xs text-center"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <small>Lorem ipsum dolor sit amet 85%</small>
              </div>
            </div>

            {/* <!-- sleep Card --> */}
            <div className="bg-[#003d5cE6] card ">
              <div className="flex justify-between items-center">
                <h6 className="text-sm text-gray-300 font-bold uppercase">
                 Sleep Tracker
                </h6>
                <span className="text-[#3e88fb] text-4xl">
                  <i class="ph-fill ph-moon"></i>
                </span>
              </div>

              <div className="flex items-baseline">
                <h3 className="md:text-3xl text-2xl font-bold uppercase">
                  6h 24m
                </h3>
              </div>

              <div className="mt-6 flex justify-between">
                <label className="flex justify-between w-full items-center cursor-pointer">
                  <span className="text-sm text-gray-300 font-bold">
                    Data stream
                  </span>
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-9 h-5 bg-[#ffffff] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#3e88fb] dark:peer-checked:bg-[#3e88fb]"></div>
                </label>
              </div>
            </div>

            {/* <!-- energy Card --> */}
            <div className="bg-[#003d5cE6] card ">
              <div className="flex justify-between items-center">
                <h6 className="text-sm text-gray-300 font-bold uppercase">
                  Energy Level
                </h6>
                <span className="text-[#28ebcd] text-4xl">
                  <i class="ph-fill ph-lightning"></i>
                </span>
              </div>

              <div className="flex items-baseline mb-4">
                <h5 className="font-semibold me-[4px] text-sm text-gray-300 ">
                  Outout
                </h5>
                <h3 className="md:text-3xl text-2xl font-bold uppercase">
                  70%
                </h3>
              </div>
              <div className="w-full bg-[#045786] h-4 icon-box">
                <div
                  className="bg-[#20c2ac] h-4 text-white text-xs text-center"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="flex items-center gap-2 text-[#28ebcd] text-sm">
                  <span className="text-[#f5c03b] text-md">
                    <i class="ph-fill ph-lightning"></i>
                  </span>
                  System Online
                </button>
              </div>
            </div>

            {/* <!-- nutrition Card --> */}
            <div className="bg-[#003d5cE6] card ">
              <div className="flex justify-between items-center">
                <h6 className="text-sm text-gray-300 font-bold uppercase">
                  Nutrition Summary
                </h6>
                <span className="text-[#5a3c8a] text-4xl">
                  <i class="ph-fill ph-orange"></i>
                </span>
              </div>

              <div className="flex items-baseline">
                <h3 className="md:text-3xl text-2xl font-bold uppercase">
                  6000
                </h3>
                <h5 className="font-semibold ms-[4px] text-sm text-gray-300 ">
                  / 2345 kcal
                </h5>
              </div>

              <div className="text-xl">Graph</div>

              <div className="mt-6 flex justify-center">
                <button className="text-[#28ebcd] text-sm">
                  Composition nominal
                </button>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* <!-- Daily objectives Card --> */}
            <div className="bg-[#003d5cE6] card">
              <div className="flex">
                <h6 className="text-sm text-gray-300 font-bold uppercase">
                  Daily objectives
                </h6>
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <small>Exercise</small>
                  <small>85%</small>
                </div>
                <div className="w-full bg-[#045786] h-4 icon-box">
                  <div
                    className="bg-[#ac7be2] h-4 text-white text-xs text-center"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <small>Take Medications</small>
                  <small>75%</small>
                </div>
                <div className="w-full bg-[#045786] h-4 icon-box">
                  <div
                    className="bg-[#fb923c] h-4 text-white text-xs text-center"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <small>Sleep</small>
                  <small>95%</small>
                </div>
                <div className="w-full bg-[#045786] h-4 icon-box">
                  <div
                    className="bg-[#d969a6] h-4 text-white text-xs text-center"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* <!-- Daily Directives Card --> */}
            <div className="bg-[#003d5cE6] card ">
              <div className="flex">
                <h6 className="text-sm text-gray-300 font-bold uppercase">
                  Daily Directives
                </h6>
              </div>

              <div className="mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#28ebcd] text-2xl leading-none">
                    <i class="ph-fill ph-check-circle"></i>
                  </span>
                  <div className="flex justify-between w-full">
                    <label className="flex justify-between w-full items-center cursor-pointer">
                      <span className="text-md text-gray-300 font-bold">
                        Steps Goal
                      </span>
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked
                      />
                      <div className="relative w-9 h-5 bg-[#ffffff] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#3e88fb] dark:peer-checked:bg-[#3e88fb]"></div>
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#ca2a30] text-2xl leading-none">
                    <i class="ph-fill ph-x-circle"></i>
                  </span>
                  <div className="flex justify-between w-full">
                    <label className="flex justify-between w-full items-center cursor-pointer">
                      <span className="text-md text-gray-300 font-bold">
                        Sleep Target
                      </span>
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative w-9 h-5 bg-[#ffffff] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#3e88fb] dark:peer-checked:bg-[#3e88fb]"></div>
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#28ebcd] text-2xl leading-none">
                    <i class="ph-fill ph-check-circle"></i>
                  </span>
                  <div className="flex justify-between w-full">
                    <label className="flex justify-between w-full items-center cursor-pointer">
                      <span className="text-md text-gray-300 font-bold">
                        Nutrition Balance
                      </span>
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked
                      />
                      <div className="relative w-9 h-5 bg-[#ffffff] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#3e88fb] dark:peer-checked:bg-[#3e88fb]"></div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-[#045786] h-4 icon-box">
                  <div
                    className="bg-[#ac7be2] h-4 text-white text-xs text-center"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <small className="text-slate-300">
                  2 of 3 directives complete
                </small>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-1  mt-4">
            <div className="bg-[#003d5cE6] card">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <h6 className="text-sm text-gray-300 font-bold uppercase">
                  Daily objectives
                </h6>
                <div>
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className=" py-3 px-6 bg-[#0098c0] text-white flex items-center justify-center gap-2 font-semibold hover:bg-[#00f6ff] hover:text-[#000000] transition-all duration-500  icon-box"
                    type="button"
                  >
                    Filterable by category
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

              
                  <div
                    id="dropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <table className="table-auto w-full mt-3">
                <thead>
                  <tr>
                    <th className="text-left">Exercise</th>
                    <th className="text-left">Duration (minutes)</th>
                    <th className="text-left">Calories Burned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Running</td>
                    <td className="text-left">30</td>
                    <td className="text-left">300</td>
                  </tr>
                  <tr>
                    <td className="text-left">Cycling</td>
                    <td className="text-left">45</td>
                    <td className="text-left">400</td>
                  </tr>
                  <tr>
                    <td className="text-left">Swimming</td>
                    <td className="text-left">60</td>
                    <td className="text-left">500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </main>
      </div>
    </>
  );
}
