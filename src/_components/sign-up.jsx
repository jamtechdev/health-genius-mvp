"use client";

export default function SignUp() {

    return (
        <>
            <div className="min-h-screen flex items-center justify-center relative">
                <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/images/bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="w-full max-w-2xl md:p-6 p-4 z-10">
                    <div className="card p-8 text-white">
                        {/* <!-- Logo --> */}
                        <div className="flex justify-center mb-6">
                            <img
                                src="/images/logo.png"
                                alt="Health Genius Logo"
                                className="max-w-[220px] w-full" />
                        </div>

                        {/* <!-- Header --> */}
                        <div className="pb-3 text-left">
                            <h1 className="text-4xl font-bold pb-2">Sign up</h1>
                            <p className="text-white">Please fill the below details to
                                continue</p>
                        </div>

                        {/* <!-- Form --> */}
                        <form className="space-y-4">
                            <div>
                                <label className="block text-white mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 bg-[#001b31] border border-[#001b31] text-white placeholder-gray-400 text-base outline-none focus:border-[#00f6ff] border-[#0098c0]" />
                            </div>

                            <div>
                                <label className="block text-white mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-[#001b31] border border-[#001b31] text-white placeholder-gray-400 text-base outline-none focus:border-[#00f6ff] border-[#0098c0]" />
                            </div>

                            <div>
                                <label className="block text-white mb-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 bg-[#001b31] border border-[#001b31] text-white placeholder-gray-400 text-base outline-none focus:border-[#00f6ff] border-[#0098c0]" />
                            </div>

                            <div>
                                <label className="block text-white mb-1">Confirm
                                    Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your confirm password"
                                    className="w-full px-4 py-3 bg-[#001b31] border border-[#001b31] text-white placeholder-gray-400 text-base outline-none focus:border-[#00f6ff] border-[#0098c0]" />
                            </div>

                            <div>
                                <a
                                    href="/sign-in.html"
                                    className="w-full bg-[#0098c0] text-white py-3 px-6 font-semibold hover:bg-[#00f6ff] hover:text-[#000000] transition-all duration-500 flex items-center justify-center gap-2 icon-box">
                                    Submit <i className="ph ph-arrow-right text-lg"></i>
                                </a>
                            </div>
                        </form>

                        {/* <!-- Footer Links --> */}
                        <div className="pt-6 space-y-3 text-center">
                            <p className="m-0">
                                Already have an account? <a href="/sign-in.html"
                                    className="text-[#00f6ff] underline">Signin</a>
                            </p>
                            <p className="m-0">
                                <a href="#" className="text-[#00f6ff] underline">Privacy
                                    policy</a> |
                                <a href="#" className="text-[#00f6ff] underline">Terms
                                    condition</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}