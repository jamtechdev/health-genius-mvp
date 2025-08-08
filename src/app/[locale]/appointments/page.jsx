"use client";
import Navbar from "@/_components/navbar";
import { useTranslations } from "next-intl";

export default function () {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <main className="lg:p-6 p-4 min-h-[calc(100vh-132px)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">    
            <div className="col-span-2">   
              <div className="bg-[#003d5c4a] border border-s-4 border-[#2dfffe] p-4 rounded-lg h-fit">
                <div className="flex items-center gap-4">
                  <span className="text-[#2dfffe] text-3xl">
                    <i className="ph-fill ph-bell-ringing"></i>
                  </span>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-col">
                      <h6 className="text-sm text-white font-bold uppercase">
                        Upcoming session: Yoga @ 6 PM
                      </h6>
                      <p className="text-xs text-gray-300">
                        Reminder set for 5:45 pm
                      </p>
                    </div>
                    <button className="cursor-pointer">
                      <span className="text-[#959595] text-xl ">
                        <i className="ph ph-x"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#003d5cE6] card mt-4">
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">   
              <div className="bg-[#003d5cE6] card">
                <div className="flex items-center gap-4">
                  <span className="text-[#2dfffe] text-3xl">
                    <i className="ph-fill ph-bowl-food"></i>
                  </span>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-col">
                      <h6 className="text-lg text-white font-bold uppercase">
                        Nutritionist -4 PM
                      </h6>
                      <p className="text-xs text-gray-300 ">
                        Doctor Session
                      </p>
                    </div>
                    <button>
                      <p className="text-sm text-[#c8a825] uppercase">
                        UPCOMING
                      </p>
                    </button>
                  </div>
                </div>

                <div className="flex items-baseline mt-6">
                  <button className="bg-transparent text-[#2dfffe] px-6 py-2 rounded-full text-sm font-semibold border-2 border-[#2dfffe] duration-300 hover:text-black hover:bg-[#2dfffe] cursor-pointer">
                    Doctor
                  </button>
                </div>
              </div>

              <div className="bg-[#003d5cE6] card">
                <div className="flex items-center gap-4">
                  <span className="text-[#2dfffe] text-3xl">
                    <i className="ph-fill ph-person-simple-tai-chi"></i>
                  </span>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-col">
                      <h6 className="text-lg text-white font-bold uppercase">
                        Yoga Flow - 9AM
                      </h6>
                      <p className="text-xs text-gray-300 ">
                        Coaching Session
                      </p>
                    </div>
                    <button>
                      <p className="text-sm text-[#379c3a] uppercase">
                        Completed
                      </p>
                    </button>
                  </div>
                </div>

                <div className="flex items-baseline mt-6">
                  <button className="bg-transparent text-[#2dfffe] px-6 py-2 rounded-full text-sm font-semibold border-2 border-[#2dfffe] duration-300 hover:text-black hover:bg-[#2dfffe] cursor-pointer">
                    Coaching
                  </button>
                </div>
              </div>

              <div className="bg-[#003d5cE6] card">
                <div className="flex items-center gap-4">
                  <span className="text-[#2dfffe] text-3xl">
                    <i className="ph-fill ph-stethoscope"></i>
                  </span>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-col">
                      <h6 className="text-lg text-white font-bold uppercase">
                        Bio-Scan - 11 AM
                      </h6>
                      <p className="text-xs text-gray-300 ">
                        Doctor Session
                      </p>
                    </div>
                    <button>
                      <p className="text-sm text-[#379c3a] uppercase">
                        Completed
                      </p>
                    </button>
                  </div>
                </div>

                <div className="flex items-baseline mt-6">
                  <button className="bg-transparent text-[#2dfffe] px-6 py-2 rounded-full text-sm font-semibold border-2 border-[#2dfffe] duration-300 hover:text-black hover:bg-[#2dfffe] cursor-pointer">
                    Doctor
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
