"use client";

export default function PasswordUpdate() {

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
                        {/* <!-- Header --> */}
                        <div className="pb-3 text-center">
                            {/* <!-- Success Icon --> */}
                            <i
                                className="ph-fill ph-check-circle text-6xl text-green-500 mb-4"></i>

                            {/* <!-- Heading --> */}
                            <h1
                                className="text-3xl font-semibold text-white mb-3">Password
                                Updated</h1>

                            {/* <!-- Message --> */}
                            <p className="text-sm text-white">
                                Your password has been successfully changed.<br />
                                If you didn’t make this change, please reset your
                                password immediately or contact support.
                            </p>
                            <div className="pt-6">
                                <a
                                    href="/sign-in.html"
                                    className="w-full bg-[#0098c0] text-white py-3 px-6 font-semibold hover:bg-[#00f6ff] hover:text-[#000000] transition-all duration-500 flex items-center justify-center gap-2 icon-box">
                                    Back to login <i
                                        className="ph ph-arrow-right text-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}